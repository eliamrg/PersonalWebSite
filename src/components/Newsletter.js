import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [t,i18n]=useTranslation("global");
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>{t("mygit")}<br></br>
              <a href="https://github.com/eliamrg">eliamrg</a> 
              </h3>
              
            </Col>
            
          </Row>
        </div>
      </Col>
  )
}
