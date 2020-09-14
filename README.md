# Setup básico ReactJs + TypeScript + StyledComponents

> Projeto usando `create-react-app` + `typescript` + `editor config` + `ESlint` +`Prettier` + `husk` e `lint-staged` + `stylelint`

## Create react app

```sh
npx create-react-app style-guide --template typescript
```

## Editor config

```sh
root = true // verdadeiro para arquivo no pasta root do projeto

[*]
indent_style = tab 	//identação por tab
indent_size = 2 	// soft tabs
charset = utf-8 	//padrão para alfabeto latino
end_of_line = lf 	//ir para a próxima linha
trim_trailing_whitespace = true 	// não permitir espaço em branco ao fim da lina
insert_final_newline = true		// ao fim da linha, pular para próxima automaticamente
```

- [https://editorconfig.org/](https://editorconfig.org/)
- [https://editorconfig-specification.readthedocs.io/en/latest/](https://editorconfig-specification.readthedocs.io/en/latest/)

## ESlint

```sh
yarn add eslint -D
```
