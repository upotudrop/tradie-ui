
export type Job = {
    id: number;
    status: string;
    contact_name: string;
    contact_email: string; 
    price: number; 
    description: string; 
    created_at: string;
    updated_at: string | null;
    suburb_id: number;
    category_id: number;
}