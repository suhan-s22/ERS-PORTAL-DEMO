package com.example.backend.service;

import com.example.backend.dto.ApiResponse;
import com.example.backend.dto.RequisitionRequest;
import com.example.backend.entity.Requisition;
import com.example.backend.repository.RequisitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class RequisitionService {

    @Autowired
    private RequisitionRepository requisitionRepository;

    public ApiResponse createRequisition(RequisitionRequest request) {

        Requisition requisition = new Requisition();

        requisition.setRequisitionId(generateRequisitionId());

        requisition.setMainEquipmentName(request.getMainEquipmentName());
        requisition.setMake(request.getMake());
        requisition.setEquipmentSerialNo(request.getEquipmentSerialNo());
        requisition.setModel(request.getModel());
        requisition.setMotorManufacturingYear(request.getMotorManufacturingYear());
        requisition.setKw(request.getKw());
        requisition.setApplicationUse(request.getApplicationUse());
        requisition.setFrame(request.getFrame());
        requisition.setInstalledLocation(request.getInstalledLocation());
        requisition.setSize(request.getSize());
        requisition.setInstalledQty(request.getInstalledQty());
        requisition.setRpm(request.getRpm());
        requisition.setEquipmentType(request.getEquipmentType());
        requisition.setServiceType(request.getServiceType());
        requisition.setReceivedDate(request.getReceivedDate());
        requisition.setWarrantyStatus(request.getWarrantyStatus());
        requisition.setBearingType(request.getBearingType());
        requisition.setKva(request.getKva());
        requisition.setVoltage(request.getVoltage());
        requisition.setDutyCycle(request.getDutyCycle());
        requisition.setCurrent(request.getCurrent());
        requisition.setReceivedTime(request.getReceivedTime());
        requisition.setPreviousRefurbishmentNo(request.getPreviousRefurbishmentNo());
        requisition.setSparesDetails(request.getSparesDetails());

        requisition.setDepartment(request.getDepartment());
        requisition.setLocation(request.getLocation());

        requisition.setSpocName(request.getSpocName());
        requisition.setSpocEmail(request.getSpocEmail());
        requisition.setSpocContact(request.getSpocContact());

        requisition.setElectricalHeadName(request.getElectricalHeadName());
        requisition.setElectricalHeadEmail(request.getElectricalHeadEmail());

        requisition.setHodName(request.getHodName());
        requisition.setHodEmail(request.getHodEmail());

        requisition.setDefectsObserved(request.getDefectsObserved());
        requisition.setRepairsRequired(request.getRepairsRequired());
        requisition.setReasonOfFailure(request.getReasonOfFailure());

        requisition.setSapMaterialCode(request.getSapMaterialCode());
        requisition.setSapEquipmentNo(request.getSapEquipmentNo());
        requisition.setSapRefurbishmentOrderNo(request.getSapRefurbishmentOrderNo());
        requisition.setSapFundCenter(request.getSapFundCenter());

        requisitionRepository.save(requisition);

return new ApiResponse(
        true,
        "Requisition created successfully.",
        requisition.getRequisitionId()
);
    }

    public java.util.List<Requisition> getAllRequisitions() {

    return requisitionRepository.findAll();

}

public Requisition getRequisitionById(Long id) {

    return requisitionRepository.findById(id).orElse(null);

}

    private String generateRequisitionId() {

        Random random = new Random();

        int number = 10000 + random.nextInt(90000);

        return "REQ-" + number;
    }
}