import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />
      <main className="container legal-content">
        <h1>Política de Privacidade</h1>
        <p className="last-updated">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section>
          <h2>1. Coleta de Informações</h2>
          <p>
            Coletamos informações que você nos fornece diretamente, como quando
            você cria uma conta, atualiza seu perfil ou usa nossos recursos de
            gestão financeira. Isso pode incluir nome, endereço de e-mail e
            dados financeiros inseridos manualmente ou importados.
          </p>
        </section>

        <section>
          <h2>2. Uso das Informações</h2>
          <p>
            Usamos as informações coletadas para fornecer, manter e melhorar
            nossos serviços, como processar transações, gerar relatórios
            financeiros e personalizar sua experiência no painel.
          </p>
        </section>

        <section>
          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos ou alugamos suas informações pessoais para terceiros.
            Podemos compartilhar informações com prestadores de serviços que nos
            ajudam a operar nosso negócio, sob obrigações de confidencialidade.
          </p>
        </section>

        <section>
          <h2>4. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger seus dados pessoais contra acesso não autorizado,
            alteração, divulgação ou destruição. No entanto, nenhum método de
            transmissão pela Internet é 100% seguro.
          </p>
        </section>

        <section>
          <h2>5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais a qualquer momento através das configurações da sua conta
            ou entrando em contato conosco.
          </p>
        </section>
      </main>
      <Footer />

      <style>{`
        .legal-page {
          background-color: var(--bg-primary);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .legal-content {
          padding-top: 120px;
          padding-bottom: 80px;
          flex: 1;
        }

        .legal-content h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .last-updated {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 3rem;
        }

        .legal-content section {
          margin-bottom: 2.5rem;
        }

        .legal-content h2 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .legal-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
