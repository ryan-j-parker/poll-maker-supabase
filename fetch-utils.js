const SUPABASE_URL = 'https://ycrjdcltdpujspwklmtr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcmpkY2x0ZHB1anNwd2tsbXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2NDA4ODAsImV4cCI6MTk3NTIxNjg4MH0.09-eHnBOrLeSZ5iozNMkme5G9W9_LfVD2GYU4ycn4eg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(data) {
    const response = await client.from('otherPolls').insert(data);
    if (response.error) {
        throw new Error(response.error.message);
    }
    return response.data;
}

export async function getPolls() {
    const response = await client.from('otherPolls').select('*');
    return response.data;
}
