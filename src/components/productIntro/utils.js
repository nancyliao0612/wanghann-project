import OncoDeep from "./images/OncoDEEP_Blue.png";
import OncoSelect from "./images/OncoSELECT_Blue.png";
import OncoFollow from "./images/OncoFOLLOW_Blue.png";

export const productArray = [
  {
    product: "安可深 OncoDEEP",
    image: OncoDeep,
    description:
      "檢測組織腫瘤微環境，依照診斷的黃金標準掃描638個基因(DNA)、20個轉錄RNA組合與不同腫瘤的特異蛋白表現組提供更深度的敵情分析報告讓臨床醫師更了解所面對的敵手，進而提供最精準與最適切的治療方案。",
    applyRange: [
      "所有三到四期的固體腫瘤 (例如：乳癌、肺癌、大腸癌)",
      "原發位置不明癌症(Cancer of Unknown Primary)",
      "小孩膠質母細胞瘤 (Glioblastoma)",
      "初次治療失敗之病患",
      "復發型腫瘤",
      "高轉移性腫瘤",
      "罕見腫瘤",
    ],
    sampleOrigin: "組織 (FFPE tissue blocks)",
    biomarkers: "638 DNA, 20 RNA and cancer-specific proteins",
    genomicSignatures: "HRD, MSI, TMB, LOH",
  },
  {
    product: "安可篩 OncoSELECT",
    image: OncoSelect,
    description: "透過檢測血液樣本，來預測腫瘤抗藥性、疾病基因組與癌症進程。",
    applyRange: [
      "所有三到四期的固體腫瘤 (例如：乳癌、肺癌、大腸癌)",
      "不容易取得組織樣本",
      "組織樣本過於久遠的病患",
    ],
    sampleOrigin: "組織 (FFPE tissue blocks)",
    biomarkers: "638 DNA, 20 RNA and cancer-specific proteins",
    genomicSignatures: "HRD, MSI, TMB, LOH",
  },
  {
    product: "安可追 OncoFOLLOW",
    image: OncoFollow,
    description:
      "透過個人客製化基因套組檢測血液中ctDNA來追蹤治療效果與復發機率。",
    applyRange: ["之前已做過安可深(OncoDEEP)或他牌100種基因以上檢測的病患"],
    sampleOrigin: "組織 (FFPE tissue blocks)",
    biomarkers: "638 DNA, 20 RNA and cancer-specific proteins",
    genomicSignatures: "HRD, MSI, TMB, LOH",
  },
];
