/* ==========================================================================
   SCRIPT PRINCIPAL — SS AR CONDICIONADO E ELÉTRICA
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. CONTROLE DO MENU HAMBÚRGUER (MOBILE)
    const menuToggle = document.querySelector(".menu-toggle");
    const navPrincipal = document.querySelector(".nav-principal");

    if (menuToggle && navPrincipal) {
        menuToggle.addEventListener("click", () => {
            navPrincipal.classList.toggle("active");
        });

        // Opcional: Fecha o menu ao clicar em algum link interno
        navPrincipal.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navPrincipal.classList.remove("active");
            });
        });
    }

    // 2. RENDERIZAÇÃO DINÂMICA DO PORTFÓLIO DE RELATÓRIOS (Caso exista na página)
    const container = document.getElementById("container-relatorios");
    if (container && typeof listaRelatorios !== 'undefined') {
        container.innerHTML = listaRelatorios.map(rel => `
            <article class="relatorio">
                <div class="relatorio-cabecalho">
                    <span>${rel.categoria}</span>
                    <span>REL. ${rel.id}</span>
                </div>
                <div class="relatorio-corpo">
                    <h2>${rel.titulo}</h2>
                    <p>${rel.descricao}</p>
                    <div class="relatorio-galeria">
                        ${rel.imagens ? rel.imagens.map(img => `
                            <img src="${img.src}" alt="${img.alt}" style="${img.style || ''}" onclick="ampliarImagem(this)">
                        `).join('') : ''}
                        
                        ${rel.videos ? rel.videos.map(vid => `
                            <video autoplay muted loop playsinline onclick="ampliarVideo(this)" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px; border: 1px solid var(--cinza-borda); cursor: pointer;" title="Clique para ampliar o vídeo">
                                <source src="${vid.src}" type="video/mp4">
                                Seu navegador não suporta vídeos.
                            </video>
                        `).join('') : ''}
                    </div>
                    <a href="https://wa.me/5566996701516?text=${encodeURIComponent(rel.whatsappText)}" target="_blank" class="btn-relatorio">Solicitar Serviço Semelhante</a>
                </div>
            </article>
        `).join('');
    }

    // 3. ENVIO DE CHAMADO TÉCNICO VIA WHATSAPP
    const formChamado = document.getElementById("form-chamado");
    if (formChamado) {
        formChamado.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("chamado-nome").value;
            const servico = document.getElementById("chamado-servico").value;
            const descricao = document.getElementById("chamado-descricao").value;

            const texto = `Olá! Meu nome/empresa é *${nome}*.\nSolicito atendimento para: *${servico}*.\n\nDetalhes:\n${descricao}`;
            const url = `https://wa.me/5566996701516?text=${encodeURIComponent(texto)}`;
            window.open(url, "_blank");
        });
    }
});

// 4. FUNÇÃO DO SIMULADOR DE CONSUMO ENERGÉTICO
function calcularConsumo() {
    const potencia = parseFloat(document.getElementById("potencia").value);
    const horas = parseFloat(document.getElementById("horas").value);
    const dias = parseFloat(document.getElementById("dias").value);
    const divResultado = document.getElementById("resultado");

    if (!potencia || !horas || !dias) {
        alert("Por favor, preencha todos os campos do simulador corretamente.");
        return;
    }

    // Cálculo: (Watts * Horas/dia * Dias/mês) / 1000 = kWh/mês
    const kwhMes = (potencia * horas * dias) / 1000;
    // Estimativa média de custo de tarifa de energia (ex: R$ 0,90 por kWh)
    const custoEstimado = kwhMes * 0.90;

    divResultado.className = "resultado-visivel";
    divResultado.innerHTML = `
        <h4>Resultado da Estimativa</h4>
        <p><strong>Consumo Mensal:</strong> ${kwhMes.toFixed(2)} kWh</p>
        <p><strong>Custo Estimado na Fatura:</strong> R$ ${custoEstimado.toFixed(2)} (Considerando tarifa média)</p>
        <p style="margin-top: 10px; font-size: 0.85rem; color: var(--texto-suave);">*Valor aproximado. O custo real depende da bandeira tarifária e concessionária local.</p>
    `;
}

// 5. CONTROLE DE TRANSPARÊNCIA DO CABEÇALHO AO ROLAR
    const cabecalho = document.querySelector(".cabecalho");
    if (cabecalho) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                cabecalho.classList.add("rolando");
            } else {
                cabecalho.classList.remove("rolando");
            }
        });
    }