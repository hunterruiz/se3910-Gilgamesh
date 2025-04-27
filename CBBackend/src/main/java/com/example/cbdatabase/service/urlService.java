package com.example.cbdatabase.service;

import com.example.cbdatabase.domain.*;
import com.example.cbdatabase.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import javax.net.ssl.SSLSession;

import java.security.cert.X509Certificate;
import java.util.List;

@AllArgsConstructor
@Service
public class urlService {

    private final urlRepository urlRepository;
    private final AccountRepository accountRepository;

    public HttpsRes fetch(URL url){
        try {
            HttpClient httpClient = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url.getUrl())).build();
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            SSLSession sslSession = response.sslSession().get();

            X509Certificate cert = (X509Certificate) sslSession.getPeerCertificates()[0];
            SSLCertificate sslCertificate = new SSLCertificate(cert);

            HttpsRes httpsRes = new HttpsRes(url.getUrl(), response.statusCode(), sslSession.getProtocol(), sslCertificate, response.headers().map());
            return httpsRes;
        } catch (Exception e) {
            System.err.println(e);
        }

        return null;
    }

    public URL create(URL url, String userId){

        Account account = accountRepository.findByUserId(userId);

        if (account != null){
            url.setAccount(account);
        }

        return urlRepository.save(url);
    }

    @GetMapping("/url")
    public List<URL> findAll(String userId){
        Account account = accountRepository.findByUserId(userId);
        if (account != null){
            return urlRepository.findAllByAccount(account);
        }

        return null;
    }

    // Use urlRepository to delete a URL record
    public void deleteById(String userId, Long urlId){
        Account account = accountRepository.findByUserId(userId).orElse(null);
        if (account != null) {
            urlRepository.deleteById(urlId);
        }
    }
}
