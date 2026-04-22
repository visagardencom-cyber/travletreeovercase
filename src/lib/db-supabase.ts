import { supabase, supabaseAdmin } from './supabase';

function getSupabaseAdmin() {
  if (!supabaseAdmin) {
    throw new Error('Supabase is not configured. Please check your environment variables.');
  }
  return supabaseAdmin;
}
import type {
  User,
  SiteContent,
  MedicalBooking,
  VisaTracking,
  Payment,
  Integration,
  ContactMessage,
} from './types';

function formatDate(): string {
  return new Date().toISOString();
}

// ============ USERS ============
export async function getUsers(): Promise<User[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('users').select('*');
  if (error) throw error;
  return data || [];
}

export async function getUserById(id: string): Promise<User | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('users').select('*').eq('id', id).single();
  if (error) return null;
  return data;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('users')
    .select('*')
    .ilike('email', email)
    .single();
  if (error) return null;
  return data;
}

export async function createUser(user: User): Promise<User> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('users').insert(user).select().single();
  if (error) throw error;
  return data;
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('users')
    .update({ ...updates, updated_at: formatDate() })
    .eq('id', id)
    .select()
    .single();
  if (error) return null;
  return data;
}

export async function deleteUser(id: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { error } = await admin.from('users').delete().eq('id', id);
  return !error;
}

// ============ SITE CONTENT ============
export async function getSiteContent(): Promise<SiteContent> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('site_content').select('*').single();
  if (error || !data) return getDefaultSiteContent();
  return data;
}

export async function updateSiteContent(updates: Partial<SiteContent>): Promise<SiteContent> {
  const admin = getSupabaseAdmin();
  const content = await getSiteContent();
  const updated = { ...content, ...updates };
  const { data, error } = await admin
    .from('site_content')
    .update({ ...updated, updated_at: formatDate() })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateSiteContentSection<K extends keyof SiteContent>(
  section: K,
  value: SiteContent[K]
): Promise<SiteContent> {
  const admin = getSupabaseAdmin();
  const columnMap: Record<string, string> = {
    hero: 'hero_title',
    about: 'about_title',
    services: 'services',
    testimonials: 'testimonials',
    contact: 'contact_address',
    footer: 'footer_description',
    terms: 'terms',
    privacy: 'privacy',
    seo: 'seo',
  };

  const column = columnMap[section];
  const { data, error } = await admin
    .from('site_content')
    .update({ [column]: value, updated_at: formatDate() })
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ============ MEDICAL BOOKINGS ============
export async function getMedicalBookings(): Promise<MedicalBooking[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('medical_bookings').select('*');
  if (error) throw error;
  return data || [];
}

export async function getMedicalBookingById(id: string): Promise<MedicalBooking | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('medical_bookings').select('*').eq('id', id).single();
  if (error) return null;
  return data;
}

export async function getMedicalBookingsByClient(clientId: string): Promise<MedicalBooking[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('medical_bookings')
    .select('*')
    .eq('client_id', clientId);
  if (error) throw error;
  return data || [];
}

export async function createMedicalBooking(booking: MedicalBooking): Promise<MedicalBooking> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('medical_bookings').insert(booking).select().single();
  if (error) throw error;
  return data;
}

export async function updateMedicalBooking(
  id: string,
  updates: Partial<MedicalBooking>
): Promise<MedicalBooking | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('medical_bookings')
    .update({ ...updates, updated_at: formatDate() })
    .eq('id', id)
    .select()
    .single();
  if (error) return null;
  return data;
}

export async function deleteMedicalBooking(id: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { error } = await admin.from('medical_bookings').delete().eq('id', id);
  return !error;
}

// ============ VISA TRACKING ============
export async function getVisaTrackings(): Promise<VisaTracking[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('visa_tracking').select('*');
  if (error) throw error;
  return data || [];
}

export async function getVisaTrackingById(id: string): Promise<VisaTracking | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('visa_tracking').select('*').eq('id', id).single();
  if (error) return null;
  return data;
}

export async function getVisaTrackingsByClient(clientId: string): Promise<VisaTracking[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('visa_tracking')
    .select('*')
    .eq('client_id', clientId);
  if (error) throw error;
  return data || [];
}

export async function createVisaTracking(visa: VisaTracking): Promise<VisaTracking> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('visa_tracking').insert(visa).select().single();
  if (error) throw error;
  return data;
}

export async function updateVisaTracking(
  id: string,
  updates: Partial<VisaTracking>
): Promise<VisaTracking | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('visa_tracking')
    .update({ ...updates, updated_at: formatDate() })
    .eq('id', id)
    .select()
    .single();
  if (error) return null;
  return data;
}

// ============ PAYMENTS ============
export async function getPayments(): Promise<Payment[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('payments').select('*');
  if (error) throw error;
  return data || [];
}

export async function getPaymentById(id: string): Promise<Payment | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('payments').select('*').eq('id', id).single();
  if (error) return null;
  return data;
}

export async function getPaymentsByClient(clientId: string): Promise<Payment[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('payments')
    .select('*')
    .eq('client_id', clientId);
  if (error) throw error;
  return data || [];
}

export async function createPayment(payment: Payment): Promise<Payment> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('payments').insert(payment).select().single();
  if (error) throw error;
  return data;
}

export async function updatePayment(
  id: string,
  updates: Partial<Payment>
): Promise<Payment | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('payments')
    .update({ ...updates, updated_at: formatDate() })
    .eq('id', id)
    .select()
    .single();
  if (error) return null;
  return data;
}

// ============ INTEGRATIONS ============
export async function getIntegrations(): Promise<Integration[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('integrations').select('*');
  if (error) throw error;
  return data || [];
}

export async function updateIntegration(
  id: string,
  updates: Partial<Integration>
): Promise<Integration | null> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin
    .from('integrations')
    .update({ ...updates, updated_at: formatDate() })
    .eq('id', id)
    .select()
    .single();
  if (error) return null;
  return data;
}

// ============ CONTACT MESSAGES ============
export async function getContactMessages(): Promise<ContactMessage[]> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('contact_messages').select('*');
  if (error) throw error;
  return data || [];
}

export async function createContactMessage(message: ContactMessage): Promise<ContactMessage> {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('contact_messages').insert(message).select().single();
  if (error) throw error;
  return data;
}

export async function markMessageRead(id: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from('contact_messages')
    .update({ is_read: true })
    .eq('id', id);
  return !error;
}

export async function deleteContactMessage(id: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { error } = await admin.from('contact_messages').delete().eq('id', id);
  return !error;
}

// ============ DEFAULT DATA ============
function getDefaultIntegrations(): Integration[] {
  return [
    { id: 'int_gtm', name: 'Google Tag Manager', type: 'gtm', isActive: false, config: { containerId: '' }, createdAt: formatDate(), updatedAt: formatDate() },
    { id: 'int_fbpixel', name: 'Facebook Pixel', type: 'facebook_pixel', isActive: false, config: { pixelId: '' }, createdAt: formatDate(), updatedAt: formatDate() },
    { id: 'int_ga', name: 'Google Analytics', type: 'google_analytics', isActive: false, config: { measurementId: '' }, createdAt: formatDate(), updatedAt: formatDate() },
    { id: 'int_whatsapp', name: 'WhatsApp', type: 'whatsapp', isActive: true, config: { phoneNumber: '+8801XXXXXXXXX', message: 'Hello! I need help with...' }, createdAt: formatDate(), updatedAt: formatDate() },
    { id: 'int_custom', name: 'Custom Script', type: 'custom_script', isActive: false, config: { headScript: '', bodyScript: '' }, createdAt: formatDate(), updatedAt: formatDate() },
  ];
}

function getDefaultSiteContent(): SiteContent {
  return {
    hero: { title: 'Your Gateway to the World', subtitle: 'Travel Tree Overseas — Your trusted partner for GCC medical, KSA visa processing, air tickets, and complete travel solutions.', backgroundImage: '/images/hero-bg.jpg', ctaText: 'Start Your Journey', ctaLink: '/register' },
    about: { title: 'About Travel Tree Overseas', subtitle: 'Your Trusted Travel Partner Since 2015', description: 'Travel Tree Overseas is a leading travel agency specializing in GCC medical processing, KSA visa services, air ticketing, and comprehensive travel solutions.', mission: 'To provide reliable, efficient, and affordable travel services.', vision: 'To become the most trusted travel agency in Bangladesh.', teamMembers: [], image: '/images/about-hero.jpg' },
    services: [],
    testimonials: [],
    contact: { address: 'House #12, Road #5, Banani, Dhaka-1213, Bangladesh', phone: '+880-1700-000000', email: 'info@traveltreeoverseas.com', whatsapp: '+8801700000000', mapEmbedUrl: '', workingHours: 'Saturday - Thursday: 9:00 AM - 7:00 PM' },
    footer: { description: 'Travel Tree Overseas is your trusted partner for all travel needs.', socialLinks: { facebook: '', instagram: '', youtube: '', linkedin: '' } },
    terms: '',
    privacy: '',
    seo: {},
  };
}
