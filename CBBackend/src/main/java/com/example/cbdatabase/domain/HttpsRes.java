package com.example.cbdatabase.domain;

import java.security.cert.Certificate;
import java.util.List;
import java.util.Map;

public class HttpsRes {

    public HttpsRes(String url, int statusCode, String protocol, Certificate certificate, Map<String, List<String>> headers) {
        this.url = url;
        this.statusCode = statusCode;
        this.protocol = protocol;
        this.certificate = certificate;
        this.headers = headers;
    }

    private final String url;
    private Certificate certificate;
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

    public Certificate getCertificate() {
        return certificate;
    }

    public Map<String, List<String>>  getHeaders() {
        return headers;
    }

//    @Override
//    public String toString(){
//        return "HttpsRes{" +
//                ", url='" + url + '\'' +
//                ", Certificate='" + certificate.toString() + '\'' +
//                ", statusCode='" + statusCode + '\'' +
//                ", headers='" + headers.toString() + '\'' +
//                ", protocol='" + protocol + '\'' +
//                '}';
//    }
}
