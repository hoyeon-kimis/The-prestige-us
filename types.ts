export enum Region {
  WEST = 'West (서부)',
  CENTRAL = 'Central (중부)',
  EAST = 'East (동부/뉴욕)',
}

export enum BudgetRange {
  SMALL_FUNDING = '$50k - $100k (소액 펀딩)',
  FUNDING_PLUS = '$100k - $500k (펀딩/투자)',
  UNDER_1M = '$500k - $1M',
  ONE_TO_TWO = '$1M - $2M',
  TWO_TO_FIVE = '$2M - $5M',
  OVER_FIVE = '$5M+',
}

export enum InvestmentType {
  DIRECT = '직접 투자 (Direct Investment)',
  FUNDING = '펀딩 투자 (Real Estate Fund)',
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  investmentType: InvestmentType | '';
  region: Region | '';
  budget: BudgetRange | '';
  message: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}