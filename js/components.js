document.addEventListener('alpine:init', () => {
    Alpine.data('layout', () => ({
        mobileMenuOpen: false,
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        services: [
            { name: 'Audit & Assurance', link: 'services/audit-assurance.html' },
            { name: 'Accounting & Payroll', link: 'services/accounting-payroll.html' },
            { name: 'Tax Advisory', link: 'services/tax-advisory.html' },
            { name: 'Financial Management', link: 'services/financial-management.html' },
            { name: 'Company Secretarial', link: 'services/company-secretarial.html' }
        ],
        currentYear: new Date().getFullYear()
    }));
});
