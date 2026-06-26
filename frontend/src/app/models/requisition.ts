export interface Requisition {

  id: number;
  requisitionId: string;

  // Equipment Information
  mainEquipmentName: string;
  make: string;
  equipmentSerialNo: string;
  model: string;
  motorManufacturingYear: string;
  kw: string;
  applicationUse: string;
  frame: string;
  installedLocation: string;
  size: string;
  installedQty: string;
  rpm: string;
  equipmentType: string;
  serviceType: string;
  receivedDate: string;
  warrantyStatus: string;
  bearingType: string;
  kva: string;
  voltage: string;
  dutyCycle: string;
  current: string;
  receivedTime: string;
  previousRefurbishmentNo: string;
  sparesDetails: string;

  // User Department Details
  department: string;
  location: string;
  spocName: string;
  spocEmail: string;
  spocContact: string;
  electricalHeadName: string;
  electricalHeadEmail: string;
  hodName: string;
  hodEmail: string;

  // Repair Analysis
  defectsObserved: string;
  repairsRequired: string;
  reasonOfFailure: string;

  // SAP Details
  sapMaterialCode: string;
  sapEquipmentNo: string;
  sapRefurbishmentOrderNo: string;
  sapFundCenter: string;
}