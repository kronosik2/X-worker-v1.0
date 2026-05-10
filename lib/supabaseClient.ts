import { createClient } from '@supabase/supabase-js'

// Прямые ключи для работы на GitHub Pages
const supabaseUrl = 'https://mqvlnrrirgeqcdbfgqsx.supabase.co'
const supabaseAnonKey = 'sb_publishable_b4wbT792YxCkJo2kNEGrbw_GJl_4DPc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Для отладки (проверим, что клиент создался)
console.log('Supabase client initialized with URL:', supabaseUrl)
