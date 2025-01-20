/*
 * File: PrimeVuePreset.js
 * *
 * Project: EVerifyWeb
 * *
 * Created on: Wednesday, 15th January 2025
 * *
 * Last Modified: Friday, 17th January 2025
 * *
 * Modified By: Akshay Anand
 * *
 * Author: Akshay Anand
 * *
 * Copyright: (c) 2025, Coextrix Technologies
 */
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const primeVueDesignPreset = definePreset(Aura, {
  /// Primitive Tokens
  primitive: {
    borderRadius: {
      none: '0',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '12px',
      xl: '14px',
    },
    /// Background Color Tokens
    backgroundPrimary: {
      50: '#FFFFFF', /// Primary Swatch
      100: '#FFFFFF',
      200: '#FFFFFF',
      300: '#FFFFFF',
      400: '#FFFFFF',
      500: '#FFFFFF',
      600: '#FFFFFF',
      700: '#FFFFFF',
      800: '#FFFFFF',
      900: '#FFFFFF',
    },
    backgroundSecondary: {
      50: '#F1F4F5', /// Primary Swatch
      100: '#DBE4E6',
      200: '#C3D3D7',
      300: '#A9C0C6',
      400: '#94B0B7',
      500: '#7FA1A9',
      600: '#729097',
      700: '#627A80',
      800: '#53666B',
      900: '#414f53',
    },

    /// Main Colors Tokens
    blueLagoon: {
      50: '#E1F5FD',
      100: '#B4E6F8',
      200: '#84D7F2',
      300: '#56C6EA',
      400: '#39BBE2',
      500: '#2EB0D9',
      600: '#28A1C6',
      700: '#1E8DAB',
      800: '#157992',
      900: '#055766', /// Primary Swatch
    },
    dolly: {
      50: '#F9FEE8',
      100: '#EFFBC6',
      200: '#E5FAA1',
      300: '#DBF87A', /// Primary Swatch
      400: '#D2F55B',
      500: '#CAF13D',
      600: '#BFDF36',
      700: '#B0C82C',
      800: '#A1B024',
      900: '#888912',
    },
    patternsBlue: {
      50: '#E3F2F5', // Primary Swatch
      100: '#B6E0E6',
      200: '#83CDD7',
      300: '#4BBAC5',
      400: '#14ABB6',
      500: '#009CA5',
      600: '#008E96',
      700: '#007E84',
      800: '#006E72',
      900: '#005253',
    },
    blackPerl: {
      50: '#E9EFF1',
      100: '#CBD7DA',
      200: '#AABCC1',
      300: '#88A2A8',
      400: '#6F8D95',
      500: '#567A83',
      600: '#4B6B72',
      700: '#3C575D',
      800: '#2F4449',
      900: '#1F2F33', // Primary Swatch
    },
  },
  semantic: {
    primary: {
      50: '{blueLagoon.50}',
      100: '{blueLagoon.100}',
      200: '{blueLagoon.200}',
      300: '{blueLagoon.300}',
      400: '{blueLagoon.400}',
      500: '{blueLagoon.500}',
      600: '{blueLagoon.600}',
      700: '{blueLagoon.700}',
      800: '{blueLagoon.800}',
      900: '{blueLagoon.900}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{blackPerl.50}',
          100: '{blackPerl.100}',
          200: '{blackPerl.200}',
          300: '{blackPerl.300}',
          400: '{blackPerl.400}',
          500: '{blackPerl.500}',
          600: '{blackPerl.600}',
          700: '{blackPerl.700}',
          800: '{blackPerl.800}',
          900: '{blackPerl.900}',
        },
        // surface: {
        //   0: '#ffffff',
        //   50: '#f8fafc',
        //   100: '#f1f5f9',
        //   200: '#e2e8f0',
        //   300: '#cbd5e1',
        //   400: '#94a3b8',
        //   500: '#64748b',
        //   600: '#475569',
        //   700: '#334155',
        //   800: '#1e293b',
        //   900: '#0f172a',
        //   950: '#020617',
        // },
        primary: {
          color: '{primary.900}',
          contrastColor: '{surface.0}',
          hoverColor: '{primary.800}',
          activeColor: '{primary.900}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{blackPerl.50}',
          100: '{blackPerl.100}',
          200: '{blackPerl.200}',
          300: '{blackPerl.300}',
          400: '{blackPerl.400}',
          500: '{blackPerl.500}',
          600: '{blackPerl.600}',
          700: '{blackPerl.700}',
          800: '{blackPerl.800}',
          900: '{blackPerl.900}',
        },
        // surface: {
        //   0: '#ffffff',
        //   50: '#fafafa',
        //   100: '#f4f4f5',
        //   200: '#e4e4e7',
        //   300: '#d4d4d8',
        //   400: '#a1a1aa',
        //   500: '#71717a',
        //   600: '#52525b',
        //   700: '#3f3f46',
        //   800: '#27272a',
        //   900: '#18181b',
        //   950: '#09090b',
        // },
        primary: {
          color: '{primary.700}',
          contrastColor: '{surface.0}',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
      },
    },
  },
})
