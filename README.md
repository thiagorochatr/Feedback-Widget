# Feedback-Widget
<h2>Tecnologias/ferramentas/Bibliotecas usadas:</h2>
<ul>
  <li>SPA ("Single Page App")</li>
  <li>Vite</li>
  <li>React + Typescript</li>
  <li>Tailwindcss + PostCSS (CSS)</li>
  <li>Phosphor Icons (Ícones)</li>
  <li>Headless UI (Acessibilidade)</li>
  <li>html2canvas</li>
  <li>NodeJs. Dependencies:</li>
    <ul>
  <li>typescript</li>
  <li>@types/node</li>
  <li>ts-node-dev</li>
    </ul>
  <li>Express</li>
  <li>Prisma</li>
  <li>SQLite</li>
  <li>Insomnia</li>
  <li>Envio de email pelo Backend</li>
  <ul>
    <li>nodemailer</li>
    <li>mailtrap</li>
  </ul>
  <li>SOLID (mais sobre, abaixo)</li>
  <li>Jest (framework de testes JS)</li>
  <li>SWC</li>
  <li>Cors (segurança do backend)</li>
  <li>React Native</li>
  <li>Expo (mobile)</li>
  <li>Axios</li>
  <li>PostgreSQL</li>
  <br>
  <h2>Deploy:</h2>
  <li>Vercel</li>
  <li>Railway</li>
</ul>

<br>

<h3>SOLID</h3>
<p><strong>S -</strong> Single Responsibility Principle</p>
<p><strong>O -</strong> Open/Closed Principle</p>
<p><strong>L -</strong> Liskov Substitution Principle</p>
<p><strong>I -</strong> Interface Segregation Principle</p>
<p><strong>D -</strong> Dependency Inversion Principle</p>

<h4>Single Responsibility Principle</h4>
<p>Cada classe/função deve ter apenas uma única responsabilidade.</p>

<h4>Open/Closed Principle</h4>
<p>As classes da aplicação devem ser abertas para extensão, mas fechadas para modificação.</p>

<h4>Liskov Substitution Principle</h4>
<p>Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando.</p>

<h4>Interface Segregation Principle</h4>
<p>Segregar as interfaces sempre que der.</p>

<h4>Dependency Inversion Principle</h4>
<p>Uma forma de inverter as dependências da classe/função. Fazer o contexto externo determinar as dependências que nossa classe/função precisa.</p>

<h3>README MOBILE</h3>

<p>No minuto 1:49:10, ele começa o backend da aplicação. Faz a interação do front com o back, e APIs</p>
<br>
<p>No minuto 2:00:08, ele faz um recap do que foi visto na aula toda.</p>
<br>
<p>No meu celular, quando vou escrever algum feedback, o teclado tampa o Widget todo. Para resolver, basta comentar a linha 92 do index.tsx da pasta Form. Para tirar a opção de multiline.</p>
<br>
<p>
Para iniciar no terminal, colocar
</p>
<br>
<p>
expo start
</p>
<br>
<p>
Depois, aperta "d" para entrar no localhost. Muda para Tunnel, e lê o QRcode.
</p>
<br>
<p>
Às vezes o expo buga e tem que apertar "r" no terminal para dar um reload.
</p>
