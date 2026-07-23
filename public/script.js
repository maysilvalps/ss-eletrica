/* ==========================================================================
   6. RENDERIZAÇÃO DINÂMICA DO PORTFÓLIO DE RELATÓRIOS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container-relatorios");
    if (!container || typeof listaRelatorios === 'undefined') return;

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
});