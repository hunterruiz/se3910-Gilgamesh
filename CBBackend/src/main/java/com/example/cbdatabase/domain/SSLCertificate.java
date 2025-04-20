package com.example.cbdatabase.domain;

import java.math.BigInteger;
import java.security.cert.X509Certificate;
import java.util.Date;

public class SSLCertificate {
    public SSLCertificate(X509Certificate cert) {
        this.subject = cert.getSubjectX500Principal().toString();
        this.issuer = cert.getIssuerX500Principal().toString();
        this.serialNumber = cert.getSerialNumber();
        this.validFrom = cert.getNotBefore();
        this.validTo = cert.getNotAfter();
        this.signatureAlgorithm = cert.getSigAlgName();
    }
    private String subject;
    private String issuer;
    private BigInteger serialNumber;
    private Date validFrom;
    private Date validTo;
    private String signatureAlgorithm;

    public String getIssuer() {
        return issuer;
    }

    public BigInteger getSerialNumber() {
        return serialNumber;
    }

    public String getSignatureAlgorithm() {
        return signatureAlgorithm;
    }

    public String getSubject() {
        return subject;
    }

    public Date getValidFrom() {
        return validFrom;
    }

    public Date getValidTo() {
        return validTo;
    }

    @Override
    public String toString() {
        return "subject : " + subject + ", issuer : " + issuer + ", serial number : " + serialNumber + ", valid from : " + validFrom + ", valid to : " + validTo + ", signature algorithm : " + signatureAlgorithm;
    }
}
