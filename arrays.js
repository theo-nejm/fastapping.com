let words = "oi alô como hoje tem tinha além foi que ele ela ter quando junta abriu abrir foi vamos parada linguiça costume região laboratório com o ter a ser gosta hoje você Rafael às louça prato participar linguiça busca bola balão roupa rito caça macarrão partida longe fora dentro gosta quem quando onde irá nunca paralelepípedo dançar dançarina música salada hospital médico rota viatura janta o ser como cartão combinar gravidade escrever avaliar coisa caso tempo ano dia vez homem senhor moço grande bom melhor pior certo último próprio ser ir estar ter haver fazer dar ficar poder ver não mais muito já quando mesmo depois ainda um dois primeiro cem mil uma de em para por com até mas ou também se assim como porque que eu você ele este esse isso sua aqui ali viu paz ser mal céu meu rio pôr vez amor fato viés mito caos zelo saga cedo ruim sagaz êxito mexer anexo honra justo muito fútil razão ícone casal genro digno tempo ânsia dengo ceder então saber mundo sendo velha forte neném cínico apogeu convém utopia índole idiota legado paixão apreço sóbrio julgar limiar solene hábito embora também dispor vulgar alocar desejo ciente sensação objeto alegria sucesso contudo alergia empatia exilado imersão conciso coragem parcial difusão volátil erudito orgulho inércia emotivo apático audácia escória família prudente sinônimo analogia monótono ativista respaldo alicerce despeito consiste desfecho sucumbir portanto complexo gratidão singular vocábulo verídico instigar paradoxo história sanidade solícito repudiar processo paralelo emulação maestria pensado abstração hipocrisia concepção paradigma essencial plenitude deliberar esperança altruísta descrição desdenhar analítico explícito companhia resolução restrição expressão imparcial nostalgia consoante entediado pretérito convicção arrogante ambicioso dicionário detrimento incidência depreender disposição preliminar tribulação restringir excelência contemplar primordial pejorativo constância satisfação sarcasmo significado perspectiva resiliência dissimulado expectativa realidade necessidade reivindicar cumprimento complexidade perseverança consideração"

threeLettersWords = []
fourLettersWords = []
fiveLettersWords = []
sixLettersWords = []
sevenLettersWords = []
eightLettersWords = []
nineLettersWords = []
tenLettersWords = []
elevenLettersWords = []

allWords = []

wordsArray = words.split(" ")

wordsArray.forEach(word => {
    switch(word.length) {
        case 3:
            threeLettersWords.push(word)
            break
        case 4:
            fourLettersWords.push(word)
            break
        case 5:
            fiveLettersWords.push(word)
            break
        case 6:
            sixLettersWords.push(word)
            break
        case 7:
            sevenLettersWords.push(word)
            break
        case 8:
            eightLettersWords.push(word)
            break
        case 9:
            nineLettersWords.push(word)
            break
        case 10:
            tenLettersWords.push(word)
            break
        case 11:
            elevenLettersWords.push(word)
           break
    }
    allWords.push(word)
}) 