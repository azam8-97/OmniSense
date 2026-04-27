import { useEffect, useMemo, useState } from 'react';

const initialForm = {
  full_name: '',
  phone_number: '',
  email: '',
  organisation: '',
  city: '',
  homes_count: '',
  message: ''
};

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9000';

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const formValid = useMemo(() => {
    return (
      form.full_name.trim() &&
      form.phone_number.trim() &&
      form.email.trim() &&
      form.organisation.trim() &&
      form.city.trim()
    );
  }, [form]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formValid) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Submitting your request...' });

    const payload = {
      ...form,
      homes_count: form.homes_count === '' ? null : Number(form.homes_count)
    };

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || 'Unable to submit your request at this time.');
      }

      setStatus({ state: 'success', message: 'Thank you. Our team will contact you within 24 hours.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({ state: 'error', message: error.message });
    }
  };

  return (
    <main>
      <section id="contact" className="section">
        <div className="container contact-wrap">
          <div>
            <h2>Get OmniSense on Your Street.</h2>
            <p>Fill in the form below and our team will contact you within 24 hours.</p>
            <p className="contact-line">03084450419 | OmniSense@gmail.com</p>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Full Name *
              <input name="full_name" value={form.full_name} onChange={onChange} required />
            </label>
            <label>
              Phone Number * (WhatsApp preferred)
              <input name="phone_number" value={form.phone_number} onChange={onChange} required />
            </label>
            <label>
              Email Address *
              <input type="email" name="email" value={form.email} onChange={onChange} required />
            </label>
            <label>
              Organisation / Housing Society Name *
              <input name="organisation" value={form.organisation} onChange={onChange} required />
            </label>
            <label>
              City *
              <select name="city" value={form.city} onChange={onChange} required>
                <option value="">Select city</option>
                <option value="Lahore">Lahore</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Karachi">Karachi</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Approximate number of homes on your street
              <input
                type="number"
                min="0"
                name="homes_count"
                value={form.homes_count}
                onChange={onChange}
              />
            </label>
            <label>
              Message / Additional details
              <textarea name="message" value={form.message} onChange={onChange} rows="4" />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Submitting...' : 'Request a Quote'}
            </button>
            {status.message && (
              <p className={`form-message form-message--${status.state === 'success' ? 'success' : 'error'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
