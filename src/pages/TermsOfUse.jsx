import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />
      <main className="container legal-content">
        <h1>Termos de Uso</h1>
        <p className="last-updated">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section>
          <h2>1. Introdução</h2>
          <p>
            Bem-vindo ao FinanceDash. Ao acessar ou usar nosso website e
            serviços, você concorda em cumprir e ficar vinculado a estes Termos
            de Uso. Se você não concordar com qualquer parte destes termos, você
            não deve usar nossos serviços.
          </p>
        </section>

        <section>
          <h2>2. Uso do Serviço</h2>
          <p>
            O FinanceDash é uma ferramenta de gestão financeira pessoal. Você
            concorda em usar o serviço apenas para fins legais e de acordo com
            estes Termos. Você é responsável por manter a confidencialidade de
            suas informações de conta e senha.
          </p>
        </section>

        <section>
          <h2>3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, recursos e funcionalidades do FinanceDash
            (incluindo, mas não se limitando a, informações, software, texto,
            telas, imagens) são de propriedade do FinanceDash ou de seus
            licenciadores e são protegidos por leis de direitos autorais e
            propriedade intelectual.
          </p>
        </section>

        <section>
          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            Em nenhum caso o FinanceDash, seus diretores, funcionários ou
            agentes serão responsáveis por quaisquer danos indiretos,
            incidentais, especiais ou consequenciais decorrentes do uso ou
            incapacidade de usar o serviço.
          </p>
        </section>

        <section>
          <h2>5. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações entrarão em vigor imediatamente após a
            publicação no site. Seu uso continuado do serviço após tais
            alterações constitui sua aceitação dos novos termos.
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

export default TermsOfUse;
