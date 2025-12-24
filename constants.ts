import { Region, BudgetRange, FeatureItem } from './types';

export const APP_NAME = "THE PRESTIGE";
export const TARGET_EMAIL = "hoyony02@gmail.com";

export const FEATURES: FeatureItem[] = [
  {
    title: "달러 자산의 안정성",
    description: "세계 기축 통화인 달러 자산을 확보하여, 경제 위기 속에서도 귀하의 자산을 안전하게 지켜드립니다.",
    iconName: "DollarSign"
  },
  {
    title: "상속과 증여의 솔루션",
    description: "미국 부동산 투자는 단순한 수익을 넘어, 다음 세대를 위한 가장 현명한 상속 플랜이 될 것입니다.",
    iconName: "ShieldCheck"
  },
  {
    title: "글로벌 라이프스타일",
    description: "자녀 교육부터 은퇴 후의 삶까지. 당신이 꿈꾸던 미국에서의 품격 있는 삶을 현실로 만들어 드립니다.",
    iconName: "Globe"
  }
];

export const REGION_DATA = [
  {
    id: Region.EAST,
    title: "East Coast & New York",
    titleKo: "동부 & 뉴욕",
    description: "세계 경제의 중심, 맨해튼의 마천루와 아이비리그의 교육 환경. 최고의 가치를 원하신다면.",
    image: "https://picsum.photos/id/43/800/600", // Representative skyscraper/city
  },
  {
    id: Region.WEST,
    title: "West Coast & California",
    titleKo: "서부 & 캘리포니아",
    description: "끝없이 펼쳐진 태평양과 온화한 기후. LA, 샌프란시스코에서의 여유로운 럭셔리 라이프.",
    image: "https://picsum.photos/id/98/800/600", // Coastal/Ocean vibe
  },
  {
    id: Region.CENTRAL,
    title: "Central & Texas",
    titleKo: "중부 & 텍사스",
    description: "합리적인 세제 혜택과 광활한 대지. 빠르게 성장하는 도시에서의 새로운 기회.",
    image: "https://picsum.photos/id/164/800/600", // Land/Nature/River vibe
  }
];

export const BUDGET_OPTIONS = Object.values(BudgetRange);