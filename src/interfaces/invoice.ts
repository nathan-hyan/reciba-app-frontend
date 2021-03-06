export interface Invoice {
  _id?: string;
  invoiceNumber: number;
  logo?: string;
  date: Date | string;
  from: string;
  amountText: string;
  amount: number;
  concept: string;
  sign?: string;
  currency: string;
  pending: boolean;
  tags?: string[];
  alreadySent?: {
    isAlreadySent: boolean;
    emailAddress?: string;
  };
  payment?: "check" | "transfer" | "cash" | "creditcard";
  transactionNumber: number | string | undefined;
}

export interface queryType {
  from?: string;
  to?: string;
  tags?: string;
  type?: "check" | "transfer" | "cash" | "creditcard" | "";
}
