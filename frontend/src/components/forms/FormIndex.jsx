import React, { useState, useRef, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { useFormSubmit } from "../../hook/useFormSubmit";
import { generateSubmissionId, traceEvent } from "../../hook/formTrace";
import "../../styles/form-index.css";

export default function FormIndex({ location = "home" }) {
  const { loading, success, error, submitForm, setError } = useFormSubmit();
  const submissionIdRef = useRef(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {

    if (success) {
      window.location.href = `${import.meta.env.BASE_URL}gracias`;
    }
  }, [success]);
  const [renderTime] = useState(Math.floor(Date.now() / 1000));

  const handleClickSubmit = () => {
    if (!submissionIdRef.current) {
      submissionIdRef.current = generateSubmissionId();
      traceEvent("CLICK_SUBMIT", submissionIdRef.current, { formIdentifier: location });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Evitar ejecuciones duplicadas si ya está cargando
    const submissionId = submissionIdRef.current || generateSubmissionId();
    if (!submissionIdRef.current) submissionIdRef.current = submissionId;
    traceEvent("ONSUBMIT_TRIGGERED", submissionId, { formIdentifier: location });

    // 2. reCAPTCHA check
    if (!executeRecaptcha) {
      console.warn("reCAPTCHA no está listo");
      setError("No se pudo validar el envío. Intentá nuevamente.");
      return;
    }

    const formData = new FormData(e.target);

    // 3. Honeypot check
    if (formData.get("fax") && String(formData.get("fax")).trim() !== "") {
      traceEvent("HONEYPOT_BLOCKED", submissionId, { formIdentifier: location });
      console.warn("[FormIndex] Bot detectado (honeypot).");
      window.location.href = `${import.meta.env.BASE_URL}gracias`;
      return;
    }

    try {
      // 4. reCAPTCHA Token
      const token = await executeRecaptcha("form_submit");

      if (!token) {
        throw new Error("recaptcha_failed");
      }

      formData.append("LOCATION", location);
      formData.append("g-recaptcha-response", token);
      formData.append("_t", renderTime); // Time Trap

      // 5. Submit
      submitForm(formData, { submissionId, formIdentifier: location });
    } catch (err) {
      console.error("Error al obtener token de reCAPTCHA:", err);
      setError("No se pudo validar el envío. Intentá nuevamente.");
      traceEvent("RECAPTCHA_ERROR", submissionId, { formIdentifier: location, error: String(err) });
    }
  };

  return (
    <div className="sib-form">
      <h5>¿Necesitás ampliar tu infraestructura de forma rápida y adaptable?</h5>
      <form id="sib-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="NOMBRE">Ingresá tu nombre*</label>
          <input
            id="NOMBRE"
            type="text"
            name="NOMBRE"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="APELLIDOS">Ingresá tu apellido*</label>
          <input
            id="APELLIDOS"
            type="text"
            name="APELLIDOS"
            placeholder="Apellido"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="PROVINCIA">Seleccioná una provincia*</label>
          <select id="PROVINCIA" name="PROVINCIA" defaultValue="" required>
            <option value="" disabled>Seleccioná tu provincia</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Ciudad Autónoma de Buenos Aires">Ciudad Autónoma de Buenos Aires</option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Ríos">Entre Ríos</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquén">Neuquén</option>
            <option value="Río Negro">Río Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Santiago del Estero">Santiago del Estero</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Tucumán">Tucumán</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="EMPRESA">Ingresá la URL de la empresa*</label>
          <input
            id="EMPRESA"
            type="text"
            name="EMPRESA"
            placeholder="Empresa"
            pattern="^(https?://)?.+\..+"
            title="Ingresá una URL válida (ej: www.miempresa.com o https://miempresa.com)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="SMS">Teléfono*</label>
          <input
            id="SMS"
            type="tel"
            name="SMS"
            placeholder="Teléfono"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="EMAIL">Correo electrónico*</label>
          <input
            id="EMAIL"
            type="email"
            name="EMAIL"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="CONSULTA">Describí brevemente tu consulta*</label>
          <textarea
            id="CONSULTA"
            name="CONSULTA"
            placeholder="Dejá acá tu consulta..."
            rows="4"
            required
          />
        </div>
        {/* Honeypot: campo invisible para bots; humanos no lo ven ni completan */}
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <label htmlFor="fax">Fax</label>
          <input
            id="fax"
            type="text"
            name="fax"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="submit-container">
          <button type="submit" className="btn btn-orange" disabled={loading} onClick={handleClickSubmit}>
            {loading ? "ENVIANDO..." : "SOLICITAR PRESUPUESTO"}
          </button>
        </div>
      </form>
      {error && (
        <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
          {error === "validation_failed" || error === "spam_detected" || error === "recaptcha_failed" || error === "token_missing"
            ? "No se pudo validar el envío. Intentá nuevamente."
            : "Error al enviar el formulario."}
        </p>
      )}
    </div>
  );
}