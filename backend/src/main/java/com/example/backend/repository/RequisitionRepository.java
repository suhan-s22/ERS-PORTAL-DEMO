package com.example.backend.repository;

import com.example.backend.entity.Requisition;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RequisitionRepository extends JpaRepository<Requisition, Long> {

    Optional<Requisition> findByRequisitionId(String requisitionId);

}