package com.example.cbdatabase.domain;

import java.security.cert.Certificate;
import java.util.List;
import java.util.Map;

public class HttpsRes {

    public HttpsRes(String url, int statusCode, String protocol, SSLCertificate sslCertificate, Map<String, List<String>> headers) {
        this.url = url;
        this.statusCode = statusCode;
        this.protocol = protocol;
        this.sslCertificate = sslCertificate;
        this.headers = headers;
    }

    private final String url;
    private SSLCertificate sslCertificate;
    private final int statusCode;
    private Map<String, List<String>>  headers;
    private final String protocol;

    public String getUrl() {
        return url;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public String getProtocol() {
        return protocol;
    }

    public SSLCertificate getCertificate() {
        return sslCertificate;
    }

    public Map<String, List<String>>  getHeaders() {
        return headers;
    }

    @Override
    public String toString(){
        return "HttpsRes{" +
                ", url='" + url + '\'' +
                ", Certificate='" + sslCertificate.toString() + '\'' +
                ", statusCode='" + statusCode + '\'' +
                ", headers='" + headers.toString() + '\'' +
                ", protocol='" + protocol + '\'' +
                '}';
    }
}
