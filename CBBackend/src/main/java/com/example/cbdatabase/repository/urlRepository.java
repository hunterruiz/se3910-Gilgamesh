package com.example.cbdatabase.repository;

import com.example.cbdatabase.domain.Account;
import com.example.cbdatabase.domain.URL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface urlRepository extends JpaRepository<URL, Long> {
    List<URL> findAllByAccount(Account account);
}
