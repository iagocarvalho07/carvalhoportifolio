import React from 'react';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Contato
            </h2>
            <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white-100 mb-2">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 bg-black-200 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white-100 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 bg-black-200 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white-100 mb-2">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-2 bg-black-200 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>
    );
} 