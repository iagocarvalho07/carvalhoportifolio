import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-white-100">
                            © 2024 Seu Nome. Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="https://github.com/seu-usuario" className="text-white-100 hover:text-white transition-colors">
                            GitHub
                        </Link>
                        <Link href="https://linkedin.com/in/seu-usuario" className="text-white-100 hover:text-white transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="https://twitter.com/seu-usuario" className="text-white-100 hover:text-white transition-colors">
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 