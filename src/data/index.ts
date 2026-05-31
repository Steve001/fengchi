export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  cover: string;
  description: string;
}

export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  overlayOpacity: number;
  primaryLink: string;
  primaryLabel: string;
  secondaryLink: string;
  secondaryLabel: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/aaa.png',
    title: '',
    subtitle: '',
    overlayOpacity: 0.45,
    primaryLink: '/products',
    primaryLabel: '',
    secondaryLink: '',
    secondaryLabel: '',
  },
  {
    id: 2,
    image: '/images/hero/bbb.png',
    title: '',
    subtitle: '',
    overlayOpacity: 0.45,
    primaryLink: '/products',
    primaryLabel: '',
    secondaryLink: '',
    secondaryLabel: '',
  },
];

export const products: Product[] = [
  {
    slug: 'fc-o-6s-16000',
    name: 'FENGCHI Orange 6S 16000mAh — 22.8V HV-NCM',
    category: 'High-Voltage High-Rate Battery',
    categorySlug: 'hv-ncm-orange',
    image: '/images/products/orange-6s-16000.png',
    description: '6S 22.8V 16Ah, 5C fast charging, 25C peak — for agri/training drones.',
    specs: [{"label": "Capacity", "value": "16,000 mAh"}, {"label": "Configuration", "value": "6S1P"}, {"label": "Nominal Voltage", "value": "22.8 V"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "5C / 10C / 25C"}, {"label": "Energy Density", "value": "220 Wh/kg"}, {"label": "Dimensions (mm)", "value": "67.5 × 74 × 180"}, {"label": "Weight", "value": "1,830 g (±5%)"}],
    features: ["Supports 5C fast charging at up to 60°C ambient temperature", "10C continuous discharge with 25C pulse capability", "1,000+ charge-discharge cycles with no sudden capacity drop", "90% automated production with constant-temperature capacity sorting", "Thickened hand strap and 3M Velcro for secure mounting"],
  },
  {
    slug: 'fc-o-6s-22000',
    name: 'FENGCHI Orange 6S 22000mAh — 22.8V HV-NCM',
    category: 'High-Voltage High-Rate Battery',
    categorySlug: 'hv-ncm-orange',
    image: '/images/products/orange-6s-22000.jpg',
    description: '6S 22.8V 22Ah, 5C fast charging, 488Wh — high-energy single-pack solution.',
    specs: [{"label": "Capacity", "value": "22,000 mAh"}, {"label": "Configuration", "value": "6S1P"}, {"label": "Nominal Voltage", "value": "22.8 V"}, {"label": "Energy", "value": "488.4 Wh"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "5C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "65 × 89 × 200"}, {"label": "Weight", "value": "2,480 g (±5%)"}],
    features: ["Supports 5C fast charging at up to 60°C ambient temperature", "10C continuous discharge with 25C pulse capability", "1,000+ charge-discharge cycles with no sudden capacity drop", "90% automated production with constant-temperature capacity sorting", "Thickened hand strap and 3M Velcro for secure mounting"],
  },
  {
    slug: 'fc-o-12s-22000',
    name: 'FENGCHI Orange 12S 22000mAh — 45.6V HV-NCM',
    category: 'High-Voltage High-Rate Battery',
    categorySlug: 'hv-ncm-orange',
    image: '/images/products/orange-12s-22000.png',
    description: '12S 45.6V 22Ah, 5C fast charging — mid-payload agri & logistics workhorse.',
    specs: [{"label": "Capacity", "value": "22,000 mAh"}, {"label": "Configuration", "value": "12S1P"}, {"label": "Nominal Voltage", "value": "45.6 V"}, {"label": "Energy", "value": "1,003 Wh"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "5C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "128 × 89 × 200"}, {"label": "Weight", "value": "4,820 g (±5%)"}],
    features: ["Supports 5C fast charging at up to 60°C ambient temperature", "10C continuous discharge with 25C pulse capability", "1,000+ charge-discharge cycles with no sudden capacity drop", "90% automated production with constant-temperature capacity sorting", "Thickened hand strap and 3M Velcro for secure mounting"],
  },
  {
    slug: 'fc-o-18s-30000',
    name: 'FENGCHI Orange 18S 30000mAh — 68.4V HV-NCM',
    category: 'High-Voltage High-Rate Battery',
    categorySlug: 'hv-ncm-orange',
    image: '/images/products/orange-18s-30000.png',
    description: '18S 68.4V 30Ah — heavy-payload high-voltage platform with 5C fast charging.',
    specs: [{"label": "Capacity", "value": "30,000 mAh"}, {"label": "Configuration", "value": "18S1P"}, {"label": "Nominal Voltage", "value": "68.4 V"}, {"label": "Energy", "value": "2,052 Wh"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "5C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "182 × 107 × 240"}, {"label": "Weight", "value": "10,320 g (±5%)"}],
    features: ["Supports 5C fast charging at up to 60°C ambient temperature", "10C continuous discharge with 25C pulse capability", "1,000+ charge-discharge cycles with no sudden capacity drop", "90% automated production with constant-temperature capacity sorting", "Thickened hand strap and 3M Velcro for secure mounting"],
  },
  {
    slug: 'fc-max-14s-32000',
    name: 'FENGCHI MAX 14S 32000mAh — Semi-Solid 51.8V',
    category: 'MAX Semi-Solid Battery',
    categorySlug: 'max-series',
    image: '/images/products/max-14s-32000.jpg',
    description: '14S 51.8V 32Ah semi-solid pack at 280Wh/kg — long-endurance industrial drones.',
    specs: [{"label": "Capacity", "value": "32,000 mAh"}, {"label": "Configuration", "value": "14S1P"}, {"label": "Nominal Voltage", "value": "51.8 V"}, {"label": "Energy", "value": "1,664 Wh"}, {"label": "Energy Density", "value": "280 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 5C / 10C"}, {"label": "Dimensions (mm)", "value": "153 × 89 × 200"}, {"label": "Weight", "value": "5,840 g (±5%)"}],
    features: ["Energy density up to 280Wh/kg — lighter weight, more power", "Dual-chemistry option: 3.7V high-nickel ternary or 3.95V super high-voltage lithium cobaltate", "Semi-solid technology: lower leakage and fire risk vs. liquid Li-Po", "Operating temperature -20°C to 70°C", "1,000+ cycles for long-term reliability"],
  },
  {
    slug: 'fc-max-14s-40000',
    name: 'FENGCHI MAX 14S 40000mAh — Semi-Solid 51.8V',
    category: 'MAX Semi-Solid Battery',
    categorySlug: 'max-series',
    image: '/images/products/max-14s-40000.png',
    description: '14S 51.8V 40Ah semi-solid — extended endurance for mapping & emergency response.',
    specs: [{"label": "Capacity", "value": "40,000 mAh"}, {"label": "Configuration", "value": "14S1P"}, {"label": "Nominal Voltage", "value": "51.8 V"}, {"label": "Energy", "value": "2,072 Wh"}, {"label": "Energy Density", "value": "280 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 5C / 10C"}, {"label": "Dimensions (mm)", "value": "147.5 × 107 × 240"}, {"label": "Weight", "value": "8,240 g (±5%)"}],
    features: ["Energy density up to 280Wh/kg — lighter weight, more power", "Dual-chemistry option: 3.7V high-nickel ternary or 3.95V super high-voltage lithium cobaltate", "Semi-solid technology: lower leakage and fire risk vs. liquid Li-Po", "Operating temperature -20°C to 70°C", "1,000+ cycles for long-term reliability"],
  },
  {
    slug: 'fc-max-18s-32000',
    name: 'FENGCHI MAX 18S 32000mAh — Semi-Solid 66.6V',
    category: 'MAX Semi-Solid Battery',
    categorySlug: 'max-series',
    image: '/images/products/max-18s-32000.png',
    description: '18S 66.6V 32Ah — high-voltage semi-solid for heavy-load mapping flights.',
    specs: [{"label": "Capacity", "value": "32,000 mAh"}, {"label": "Configuration", "value": "18S1P"}, {"label": "Nominal Voltage", "value": "66.6 V"}, {"label": "Energy", "value": "1,998 Wh"}, {"label": "Energy Density", "value": "280 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 5C / 10C"}, {"label": "Dimensions (mm)", "value": "196.5 × 89 × 200"}, {"label": "Weight", "value": "7,460 g (±5%)"}],
    features: ["Energy density up to 280Wh/kg — lighter weight, more power", "Dual-chemistry option: 3.7V high-nickel ternary or 3.95V super high-voltage lithium cobaltate", "Semi-solid technology: lower leakage and fire risk vs. liquid Li-Po", "Operating temperature -20°C to 70°C", "1,000+ cycles for long-term reliability"],
  },
  {
    slug: 'fc-max-18s-40000',
    name: 'FENGCHI MAX 18S 40000mAh — Semi-Solid 66.6V',
    category: 'MAX Semi-Solid Battery',
    categorySlug: 'max-series',
    image: '/images/products/max-18s-40000.png',
    description: '18S 66.6V 40Ah — flagship MAX pack for industrial drones at 2,664Wh.',
    specs: [{"label": "Capacity", "value": "40,000 mAh"}, {"label": "Configuration", "value": "18S1P"}, {"label": "Nominal Voltage", "value": "66.6 V"}, {"label": "Energy", "value": "2,664 Wh"}, {"label": "Energy Density", "value": "280 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 5C / 10C"}, {"label": "Dimensions (mm)", "value": "189 × 107 × 240"}, {"label": "Weight", "value": "10,550 g (±5%)"}],
    features: ["Energy density up to 280Wh/kg — lighter weight, more power", "Dual-chemistry option: 3.7V high-nickel ternary or 3.95V super high-voltage lithium cobaltate", "Semi-solid technology: lower leakage and fire risk vs. liquid Li-Po", "Operating temperature -20°C to 70°C", "1,000+ cycles for long-term reliability"],
  },
  {
    slug: 'fc-ultra-6s-32000',
    name: 'FENGCHI ULTRA 6S 32000mAh — High-Density 22.2V',
    category: 'ULTRA High-Density Battery',
    categorySlug: 'ultra-series',
    image: '/images/products/ultra-6s-32000.jpg',
    description: '6S 22.2V 32Ah high-density semi-solid pack — 320Wh/kg energy density.',
    specs: [{"label": "Capacity", "value": "32,000 mAh"}, {"label": "Configuration", "value": "6S1P"}, {"label": "Nominal Voltage", "value": "22.2 V"}, {"label": "Energy Density", "value": "320 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 3C / 5C"}, {"label": "Dimensions (mm)", "value": "65.5 × 89 × 200"}, {"label": "Weight", "value": "2,430 g (±5%)"}],
    features: ["Industry-leading energy density up to 350Wh/kg", "Rate balance optimization — high energy density meets high-rate output", "Anti-collision corner protection for impact safety", "Automated high-precision electrode preparation and stacking", "Designed for 100km-class cold-chain logistics flights"],
  },
  {
    slug: 'fc-ultra-14s-35000',
    name: 'FENGCHI ULTRA 14S 35000mAh — High-Density 51.8V',
    category: 'ULTRA High-Density Battery',
    categorySlug: 'ultra-series',
    image: '/images/products/ultra-14s-35000.png',
    description: '14S 51.8V 35Ah at 320Wh/kg — long-endurance heavy-load power.',
    specs: [{"label": "Capacity", "value": "35,000 mAh"}, {"label": "Configuration", "value": "14S1P"}, {"label": "Nominal Voltage", "value": "51.8 V"}, {"label": "Energy", "value": "1,813 Wh"}, {"label": "Energy Density", "value": "320 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 3C / 5C"}, {"label": "Dimensions (mm)", "value": "156 × 89 × 200"}, {"label": "Weight", "value": "5,890 g (±5%)"}],
    features: ["Industry-leading energy density up to 350Wh/kg", "Rate balance optimization — high energy density meets high-rate output", "Anti-collision corner protection for impact safety", "Automated high-precision electrode preparation and stacking", "Designed for 100km-class cold-chain logistics flights"],
  },
  {
    slug: 'fc-ultra-18s-35000',
    name: 'FENGCHI ULTRA 18S 35000mAh — Premium 350Wh/kg',
    category: 'ULTRA High-Density Battery',
    categorySlug: 'ultra-series',
    image: '/images/products/ultra-18s-35000.jpg',
    description: '18S 66.6V 35Ah at 350Wh/kg — flagship ULTRA semi-solid pack.',
    specs: [{"label": "Capacity", "value": "35,000 mAh"}, {"label": "Configuration", "value": "18S1P"}, {"label": "Nominal Voltage", "value": "66.6 V"}, {"label": "Energy", "value": "2,331 Wh"}, {"label": "Energy Density", "value": "350 Wh/kg"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "1C / 3C / 5C"}, {"label": "Dimensions (mm)", "value": "178.9 × 89 × 200"}, {"label": "Weight", "value": "7,080 g (±5%)"}],
    features: ["Industry-leading energy density up to 350Wh/kg", "Rate balance optimization — high energy density meets high-rate output", "Anti-collision corner protection for impact safety", "Automated high-precision electrode preparation and stacking", "Designed for 100km-class cold-chain logistics flights"],
  },
  {
    slug: 'fc-ultra-28s-36000',
    name: 'FENGCHI ULTRA 28S 36000mAh — Heavy-Lift 106.4V',
    category: 'ULTRA High-Density Battery',
    categorySlug: 'ultra-series',
    image: '/images/products/heavy-28s-36000-main.jpg',
    description: '28S 106.4V 36Ah — high-voltage heavy-lift pack purpose-built for industrial cargo drones.',
    specs: [{"label": "Capacity", "value": "36,000 mAh"}, {"label": "Configuration", "value": "28S1P"}, {"label": "Nominal Voltage", "value": "106.4 V"}, {"label": "Energy", "value": "~3,830 Wh"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "5C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "150 × 220 × 250"}, {"label": "Weight", "value": "15,600 g (±5%)"}],
    features: ["Industry-leading energy density up to 350Wh/kg", "Rate balance optimization — high energy density meets high-rate output", "Anti-collision corner protection for impact safety", "Automated high-precision electrode preparation and stacking", "Designed for 100km-class cold-chain logistics flights"],
  },
  {
    slug: 'fc-edu-6s-16000',
    name: 'FENGCHI Training 6S 16000mAh — 22.8V Edu Pack',
    category: 'Education & Training Battery',
    categorySlug: 'training-drone',
    image: '/images/products/orange-6s-16000.png',
    description: 'Training-grade 6S 22.8V 16Ah pack — perfect compatibility with classroom drones.',
    specs: [{"label": "Capacity", "value": "16,000 mAh"}, {"label": "Configuration", "value": "6S1P"}, {"label": "Nominal Voltage", "value": "22.8 V"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "2C / 10C / 25C"}, {"label": "Energy Density", "value": "220 Wh/kg"}, {"label": "Dimensions (mm)", "value": "67.5 × 74 × 180"}, {"label": "Weight", "value": "1,830 g (±5%)"}],
    features: ["Perfect compatibility with mainstream training drones", "High capacity, high voltage, high discharge rate — longer training sessions per charge", "Reduces battery swap frequency, lowers training cost per session", "Robust packaging built for high-frequency classroom use"],
  },
  {
    slug: 'fc-edu-6s-22000',
    name: 'FENGCHI Training 6S 22000mAh — 22.8V Edu Pack',
    category: 'Education & Training Battery',
    categorySlug: 'training-drone',
    image: '/images/products/orange-6s-22000.jpg',
    description: 'Training-grade 6S 22.8V 22Ah — extended classroom flight time.',
    specs: [{"label": "Capacity", "value": "22,000 mAh"}, {"label": "Configuration", "value": "6S1P"}, {"label": "Nominal Voltage", "value": "22.8 V"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "2C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "65 × 89 × 200"}, {"label": "Weight", "value": "2,480 g (±5%)"}],
    features: ["Perfect compatibility with mainstream training drones", "High capacity, high voltage, high discharge rate — longer training sessions per charge", "Reduces battery swap frequency, lowers training cost per session", "Robust packaging built for high-frequency classroom use"],
  },
  {
    slug: 'fc-edu-12s-22000',
    name: 'FENGCHI Training 12S 22000mAh — 45.6V Edu Pack',
    category: 'Education & Training Battery',
    categorySlug: 'training-drone',
    image: '/images/products/orange-12s-22000.png',
    description: 'Training-grade 12S 45.6V 22Ah — 1,003Wh classroom workhorse.',
    specs: [{"label": "Capacity", "value": "22,000 mAh"}, {"label": "Configuration", "value": "12S1P"}, {"label": "Nominal Voltage", "value": "45.6 V"}, {"label": "Energy", "value": "1,003 Wh"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "2C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "128 × 89 × 200"}, {"label": "Weight", "value": "4,820 g (±5%)"}],
    features: ["Perfect compatibility with mainstream training drones", "High capacity, high voltage, high discharge rate — longer training sessions per charge", "Reduces battery swap frequency, lowers training cost per session", "Robust packaging built for high-frequency classroom use"],
  },
  {
    slug: 'fc-edu-12s-30000',
    name: 'FENGCHI Training 12S 30000mAh — 45.6V Edu Pack',
    category: 'Education & Training Battery',
    categorySlug: 'training-drone',
    image: '/images/products/orange-18s-30000-alt.png',
    description: 'Training-grade 12S 45.6V 30Ah — extended sortie length, fewer battery changes.',
    specs: [{"label": "Capacity", "value": "30,000 mAh"}, {"label": "Configuration", "value": "12S1P"}, {"label": "Nominal Voltage", "value": "45.6 V"}, {"label": "Rate (Chg/Cont/Pulse)", "value": "2C / 10C / 25C"}, {"label": "Dimensions (mm)", "value": "122 × 107 × 240"}, {"label": "Weight", "value": "6,930 g (±5%)"}],
    features: ["Perfect compatibility with mainstream training drones", "High capacity, high voltage, high discharge rate — longer training sessions per charge", "Reduces battery swap frequency, lowers training cost per session", "Robust packaging built for high-frequency classroom use"],
  },
  {
    slug: 'fc-charger-up3000',
    name: 'FENGCHI UP3000 Smart Drone Charger',
    category: 'Smart Chargers & BMS',
    categorySlug: 'chargers-bms',
    image: '/images/products/charger-1.png',
    description: 'High-power intelligent charger compatible with up to 28S pouch cell battery packs.',
    specs: [{"label": "Compatibility", "value": "Up to 28S pouch cell packs"}, {"label": "Profile", "value": "Customizable per chemistry"}, {"label": "Use Case", "value": "Heavy-lift / eVTOL / flying vehicles"}],
    features: ["Compatible with up to 28S pouch cell battery packs", "Customizable charge profile per cell chemistry", "Designed for high-end UAV, eVTOL and flying vehicle platforms", "Field-ready industrial enclosure"],
  },
  {
    slug: 'fc-bms-hv-platform',
    name: 'FENGCHI High-Voltage BMS Platform (200-800V)',
    category: 'Smart Chargers & BMS',
    categorySlug: 'chargers-bms',
    image: '/images/products/charger-9.png',
    description: 'Master-slave two-level BMS architecture for 200V / 400V / 600V / 800V eVTOL and heavy-lift platforms.',
    specs: [{"label": "Voltage Range", "value": "200V / 400V / 600V / 800V"}, {"label": "Architecture", "value": "Master-slave two-level BMS"}, {"label": "Functions", "value": "Switching / power-on/off protection / current distribution"}, {"label": "Safety", "value": "Self-diagnosis · fault tolerance · passive balancing"}],
    features: ["Master-slave two-level BMS architecture", "Customizable for 200V / 400V / 600V / 800V platforms", "BMS reports overvoltage, undervoltage, overcurrent, over/under-temperature, and communication anomalies", "High-voltage control unit handles severe overvoltage / undervoltage / short-circuit faults", "Self-diagnosis, fault tolerance and passive balancing built-in"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'agri-spray-fleet',
    title: 'Plant-Protection Spray Drone Fleet',
    industry: 'Agricultural Plant Protection',
    cover: '/images/cases/case-01.jpg',
    description: 'Orange Label 5C fast-charging packs power high-frequency spray operations across crop seasons.',
  },
  {
    slug: 'logistics-cold-chain',
    title: '100-km Cold-Chain Logistics',
    industry: 'Logistics & Freight',
    cover: '/images/cases/case-02.jpg',
    description: 'ULTRA semi-solid packs at 350Wh/kg enable 100-km-class cold-chain logistics flights.',
  },
  {
    slug: 'mapping-survey',
    title: 'Long-Endurance Mapping Mission',
    industry: 'Mapping & Surveying',
    cover: '/images/cases/case-03.jpg',
    description: 'MAX 18S 40Ah delivers 2,664Wh of energy for extended mapping sortie duration.',
  },
  {
    slug: 'fire-rescue',
    title: 'Emergency Response & Fire-Fighting',
    industry: 'Fire Rescue',
    cover: '/images/cases/case-04.jpg',
    description: 'Semi-solid technology cuts liquid leakage and fire risk in extreme rescue environments.',
  },
  {
    slug: 'power-inspection',
    title: 'High-Voltage Line Inspection',
    industry: 'Power Inspection',
    cover: '/images/cases/case-05.jpg',
    description: 'High-voltage 18S packs deliver the sustained power needed for transmission-line inspection.',
  },
  {
    slug: 'police-patrol',
    title: 'Police Patrol Drone Operations',
    industry: 'Police Patrol',
    cover: '/images/cases/case-06.jpg',
    description: 'Reliable power for routine and emergency police patrol drone deployments.',
  },
];

export const stats = [
  { number: '1000+', label: '项目供货经验' },
  { number: '28', label: '覆盖国家地区' },
  { number: '56+', label: '产品认证证书' },
  { number: '99.9%', label: '产品可靠性' },
];

export const applicationAreas = [
  { title: '农业植保', description: '橙标 5C 快充电池为植保无人机提供高频次作业动力，支持长时间喷洒与播撒任务。' },
  { title: '物流配送', description: 'MAX 半固态高能量密度电池助力物流无人机实现 100km 级长距离冷链配送。' },
  { title: '安防巡检', description: '高压电池平台为警务和安防无人机提供持续稳定动力，支持快速响应与长时间巡航。' },
  { title: '测绘勘察', description: 'ULTRA 高密度电池方案为测绘无人机提供更长滞空时间，覆盖更大作业面积。' },
  { title: '消防应急', description: '半固态电池技术降低液体泄漏和火灾风险，为消防无人机在极端环境下提供安全保障。' },
  { title: '教育培训', description: '经济型训练电池系列，为无人机培训学校提供高性价比的专业教学电池方案。' },
];

export const siteInfo = {
  company: '河南聚能新能源有限公司',
  brand: 'FENGCHI',
  tagline: '黄金效能 · 稳定耐用',
  description: 'Fengchi is a drone battery brand under Henan Juneng New Energy Co., Ltd., specializing in providing high-rate, high-energy density semi-solid lithium batteries and intelligent charging solutions for industrial drones.',
  email: 'steve0110001@gmail.com',
  phone: '+86 13838580211',
  address: '中国 · 河南',
};
