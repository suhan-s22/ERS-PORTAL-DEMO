package com.example.backend.controller;

import com.example.backend.dto.ApiResponse;
import com.example.backend.dto.RequisitionRequest;
import com.example.backend.service.RequisitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.backend.entity.Requisition;
import java.util.List;

@RestController
@RequestMapping("/api/requisition")
@CrossOrigin(origins = "http://localhost:4200")
public class RequisitionController {

    @Autowired
    private RequisitionService requisitionService;

    @PostMapping
    public ApiResponse createRequisition(@RequestBody RequisitionRequest request) {

        return requisitionService.createRequisition(request);

    }

    @GetMapping
public List<Requisition> getAllRequisitions() {

    return requisitionService.getAllRequisitions();

}

@GetMapping("/{id}")
public Requisition getRequisitionById(@PathVariable Long id) {

    return requisitionService.getRequisitionById(id);

}

}