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

    @CrossOrigin
    @PostMapping("/url/save")
    public ResponseEntity<?> save(@RequestBody URL url) {

        System.out.println("Save");
        System.out.println(url.toString());

        String userId = "test";

        return new ResponseEntity<>(urlService.create(url, userId), HttpStatus.CREATED);
    }

    @CrossOrigin
    @PostMapping("/url/fetch")
    public ResponseEntity<?> fetch(@RequestBody URL url) {
        return new ResponseEntity<>(urlService.fetch(url), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/urls")
    public ResponseEntity<?> findAllUrls(){
        String userId = "test";
        System.out.println("FindAllUrls By Name : " + userId);
        return new ResponseEntity<>(urlService.findAll(userId), HttpStatus.OK);
    }

    // Use urlService.deleteById to delete a record
    @CrossOrigin
    @DeleteMapping("/url/{urlId}")
    public void deleteUrl(@PathVariable("urlId") Long urlId) {
        String userId = "test";
        System.out.println("Delete By Id : " + userId + " " + urlId);
        urlService.deleteById(userId, urlId);
    }

    // Use urlService.create to update a record
    @CrossOrigin
    @PutMapping("/url/update")
    public ResponseEntity<?> update(@RequestBody URL url) {
        String userId = "test";
        System.out.println("Update By Id : " + userId + " " + url.toString());
        return new ResponseEntity<>(urlService.create(url, userId), HttpStatus.OK);
    }
}
