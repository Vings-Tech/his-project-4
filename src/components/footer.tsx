import React from 'react';
import { ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--background)',
            borderTop: '1px solid var(--border)',
            padding: '24px',
            width: '100%',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={20} color="var(--primary)" />
                    <span style={{
                        fontWeight: '600',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem'
                    }}>
                        MediSync Enterprise HIS
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </span>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)'
                }}>
                    <a href="mailto:support@medisync.local" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                    }} className="hover:text-primary">
                        <Mail size={16} /> Support
                    </a>

                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                    }} className="hover:text-primary">
                        <Phone size={16} /> 1-800-MED-SYNC
                    </a>

                    <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                    }} className="hover:text-primary">
                        Privacy Policy <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            <style jsx>{`
                a:hover {
                    color: var(--primary) !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
