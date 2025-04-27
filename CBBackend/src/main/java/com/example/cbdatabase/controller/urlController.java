package com.example.cbdatabase.controller;

import com.example.cbdatabase.domain.URL;
import com.example.cbdatabase.service.urlService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
public class urlController {

    private final urlService urlService;

    // Uses the PathVariable to determine which account the URL is saved under
    @CrossOrigin
    @PostMapping("/url/save/{userId}")
    public ResponseEntity<?> save(@RequestBody URL url,@PathVariable String userId) {

        System.out.println("Save");
        System.out.println(userId);
        System.out.println(url.toString());

        return new ResponseEntity<>(urlService.create(url, userId), HttpStatus.CREATED);
    }

    @CrossOrigin
    @PostMapping("/url/fetch")
    public ResponseEntity<?> fetch(@RequestBody URL url) {
        return new ResponseEntity<>(urlService.fetch(url), HttpStatus.CREATED);
    }

    // Uses the PathVariable to find all URLs saved to that account
    @CrossOrigin
    @GetMapping("/urls/{userId}")
    public ResponseEntity<?> findAllUrls(@PathVariable String userId) {
        System.out.println("FindAllUrls By Name : " + userId);
        return new ResponseEntity<>(urlService.findAll(userId), HttpStatus.OK);
    }

    // Uses the PathVariable to delete only the specific URL
    @CrossOrigin
    @DeleteMapping("/url/{urlId}")
    public void deleteUrl(@PathVariable("urlId") Long urlId) {
        System.out.println("Delete By Id : " + urlId);
        urlService.deleteById(urlId);
    }
}
