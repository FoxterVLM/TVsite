import { create } from 'zustand';

interface FormState {
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  setField: (field: keyof FormState['fields'], value: string) => void;
  validateField: (field: keyof FormState['fields']) => void;
  submitForm: () => void;
}

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const regex = /^[\d\s\-\(\)\+]+$/;
  return regex.test(phone) && phone.length >= 10;
};

export const useFormStore = create<FormState>((set, get) => ({
  fields: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  },
  errors: {},
  setField: (field: keyof FormState['fields'], value: string) => {
    set((state: FormState) => ({
      fields: { ...state.fields, [field]: value },
      errors: { ...state.errors, [field]: undefined },
    }));
  },
  validateField: (field: keyof FormState['fields']) => {
    const value = get().fields[field];
    let error: string | undefined;
    if (!value.trim()) {
      error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (field === 'email' && !validateEmail(value)) {
      error = 'Invalid email format';
    } else if (field === 'phone' && !validatePhone(value)) {
      error = 'Invalid phone number';
    }
    set((state: FormState) => ({
      errors: { ...state.errors, [field]: error },
    }));
  },
  submitForm: () => {
    const fields: (keyof FormState['fields'])[] = ['firstName', 'lastName', 'email', 'phone', 'message'];
    fields.forEach((field) => get().validateField(field));
    const errors = get().errors;
    const hasErrors = Object.values(errors).some((err) => err);
    if (!hasErrors) {
      
      alert('Form submitted successfully!');
      
      set({
        fields: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        },
        errors: {},
      });
    }
  },
}));
