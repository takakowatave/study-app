import "@testing-library/jest-dom";
import dotenv from "dotenv";

dotenv.config();

// 環境変数を明示的に上書き
process.env.VITE_SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://xyujuzkkiifzsmaoostv.supabase.co";
process.env.VITE_SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dWp1emtraWlmenNtYW9vc3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3ODA0NzIsImV4cCI6MjA1MzM1NjQ3Mn0.mnfBwJkcMHVvHwK0jDZ7vJ1hhS-1XjzNAsklrJZoEtE";
