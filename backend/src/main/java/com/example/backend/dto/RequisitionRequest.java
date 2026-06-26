package com.example.backend.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class RequisitionRequest {

    // Equipment Information
    private String mainEquipmentName;
    private String make;
    private String equipmentSerialNo;
    private String model;
    private String motorManufacturingYear;
    private String kw;
    private String applicationUse;
    private String frame;
    private String installedLocation;
    private String size;
    private String installedQty;
    private String rpm;
    private String equipmentType;
    private String serviceType;

    private LocalDate receivedDate;

    private String warrantyStatus;
    private String bearingType;
    private String kva;
    private String voltage;
    private String dutyCycle;
    private String current;

    private LocalTime receivedTime;

    private String previousRefurbishmentNo;
    private String sparesDetails;

    // User Department Details
    private String department;
    private String location;

    private String spocName;
    private String spocEmail;
    private String spocContact;

    private String electricalHeadName;
    private String electricalHeadEmail;

    private String hodName;
    private String hodEmail;

    // Repair Analysis
    private String defectsObserved;
    private String repairsRequired;
    private String reasonOfFailure;

    // SAP Details
    private String sapMaterialCode;
    private String sapEquipmentNo;
    private String sapRefurbishmentOrderNo;
    private String sapFundCenter;

    public RequisitionRequest() {
        
    }

    public String getMainEquipmentName() {
        return mainEquipmentName;
    }

    public void setMainEquipmentName(String mainEquipmentName) {
        this.mainEquipmentName = mainEquipmentName;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getEquipmentSerialNo() {
        return equipmentSerialNo;
    }

    public void setEquipmentSerialNo(String equipmentSerialNo) {
        this.equipmentSerialNo = equipmentSerialNo;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getMotorManufacturingYear() {
        return motorManufacturingYear;
    }

    public void setMotorManufacturingYear(String motorManufacturingYear) {
        this.motorManufacturingYear = motorManufacturingYear;
    }

    public String getKw() {
        return kw;
    }

    public void setKw(String kw) {
        this.kw = kw;
    }

    public String getApplicationUse() {
        return applicationUse;
    }

    public void setApplicationUse(String applicationUse) {
        this.applicationUse = applicationUse;
    }

    public String getFrame() {
        return frame;
    }

    public void setFrame(String frame) {
        this.frame = frame;
    }

    public String getInstalledLocation() {
        return installedLocation;
    }

    public void setInstalledLocation(String installedLocation) {
        this.installedLocation = installedLocation;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getInstalledQty() {
        return installedQty;
    }

    public void setInstalledQty(String installedQty) {
        this.installedQty = installedQty;
    }

    public String getRpm() {
        return rpm;
    }

    public void setRpm(String rpm) {
        this.rpm = rpm;
    }

    public String getEquipmentType() {
        return equipmentType;
    }

    public void setEquipmentType(String equipmentType) {
        this.equipmentType = equipmentType;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public LocalDate getReceivedDate() {
        return receivedDate;
    }

    public void setReceivedDate(LocalDate receivedDate) {
        this.receivedDate = receivedDate;
    }

    public String getWarrantyStatus() {
        return warrantyStatus;
    }

    public void setWarrantyStatus(String warrantyStatus) {
        this.warrantyStatus = warrantyStatus;
    }

    public String getBearingType() {
        return bearingType;
    }

    public void setBearingType(String bearingType) {
        this.bearingType = bearingType;
    }

    public String getKva() {
        return kva;
    }

    public void setKva(String kva) {
        this.kva = kva;
    }

    public String getVoltage() {
        return voltage;
    }

    public void setVoltage(String voltage) {
        this.voltage = voltage;
    }

    public String getDutyCycle() {
        return dutyCycle;
    }

    public void setDutyCycle(String dutyCycle) {
        this.dutyCycle = dutyCycle;
    }

    public String getCurrent() {
        return current;
    }

    public void setCurrent(String current) {
        this.current = current;
    }

    public LocalTime getReceivedTime() {
        return receivedTime;
    }

    public void setReceivedTime(LocalTime receivedTime) {
        this.receivedTime = receivedTime;
    }

    public String getPreviousRefurbishmentNo() {
        return previousRefurbishmentNo;
    }

    public void setPreviousRefurbishmentNo(String previousRefurbishmentNo) {
        this.previousRefurbishmentNo = previousRefurbishmentNo;
    }

    public String getSparesDetails() {
        return sparesDetails;
    }

    public void setSparesDetails(String sparesDetails) {
        this.sparesDetails = sparesDetails;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSpocName() {
        return spocName;
    }

    public void setSpocName(String spocName) {
        this.spocName = spocName;
    }

    public String getSpocEmail() {
        return spocEmail;
    }

    public void setSpocEmail(String spocEmail) {
        this.spocEmail = spocEmail;
    }

    public String getSpocContact() {
        return spocContact;
    }

    public void setSpocContact(String spocContact) {
        this.spocContact = spocContact;
    }

    public String getElectricalHeadName() {
        return electricalHeadName;
    }

    public void setElectricalHeadName(String electricalHeadName) {
        this.electricalHeadName = electricalHeadName;
    }

    public String getElectricalHeadEmail() {
        return electricalHeadEmail;
    }

    public void setElectricalHeadEmail(String electricalHeadEmail) {
        this.electricalHeadEmail = electricalHeadEmail;
    }

    public String getHodName() {
        return hodName;
    }

    public void setHodName(String hodName) {
        this.hodName = hodName;
    }

    public String getHodEmail() {
        return hodEmail;
    }

    public void setHodEmail(String hodEmail) {
        this.hodEmail = hodEmail;
    }

    public String getDefectsObserved() {
        return defectsObserved;
    }

    public void setDefectsObserved(String defectsObserved) {
        this.defectsObserved = defectsObserved;
    }

    public String getRepairsRequired() {
        return repairsRequired;
    }

    public void setRepairsRequired(String repairsRequired) {
        this.repairsRequired = repairsRequired;
    }

    public String getReasonOfFailure() {
        return reasonOfFailure;
    }

    public void setReasonOfFailure(String reasonOfFailure) {
        this.reasonOfFailure = reasonOfFailure;
    }

    public String getSapMaterialCode() {
        return sapMaterialCode;
    }

    public void setSapMaterialCode(String sapMaterialCode) {
        this.sapMaterialCode = sapMaterialCode;
    }

    public String getSapEquipmentNo() {
        return sapEquipmentNo;
    }

    public void setSapEquipmentNo(String sapEquipmentNo) {
        this.sapEquipmentNo = sapEquipmentNo;
    }

    public String getSapRefurbishmentOrderNo() {
        return sapRefurbishmentOrderNo;
    }

    public void setSapRefurbishmentOrderNo(String sapRefurbishmentOrderNo) {
        this.sapRefurbishmentOrderNo = sapRefurbishmentOrderNo;
    }

    public String getSapFundCenter() {
        return sapFundCenter;
    }

    public void setSapFundCenter(String sapFundCenter) {
        this.sapFundCenter = sapFundCenter;
    }
}