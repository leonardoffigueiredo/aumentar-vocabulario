<?php
    // Se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Verifica se os dados foram recebidos
        if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["assunto"])) {
            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $assunto = $_POST["assunto"];

            $arquivo = fopen("arquivo.txt", "a+");

            if ($arquivo === false) {
                die("Erro ao abrir o arquivo.");
            }

            fwrite($arquivo, "Nome: $nome\n");
            fwrite($arquivo, "Email: $email\n");
            fwrite($arquivo, "Assunto: $assunto\n");
            fwrite($arquivo, "-----------------\n");

            fclose($arquivo);

            echo "Formulário enviado com sucesso!";
        } else {
            echo "Erro: Dados do formulário ausentes.";
        }
    }
    ?>