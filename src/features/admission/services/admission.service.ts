import { AdmissionData } from "../data";
import { Admission } from "../interfaces";

export class AdmissionService {
  static async getAdmissionData() {
    return new Promise<Admission[]>((resolve) => {
      setTimeout(() => resolve(AdmissionData), 2000);
    });
  }
}
