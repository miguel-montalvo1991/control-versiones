## Descripcion

Se corrigieron varios errores que tenia el proyecto y se organizo todo el codigo.
El archivo `calculator.js` usaba `module.exports` que es la forma antigua de exportar en JavaScript,
pero el proyecto esta configurado como ES Modules, entonces se cambio a `export` para que funcione bien.
Las pruebas tampoco estaban probando el codigo real, tenian su propia funcion inventada adentro,
asi que se corrigieron para que importen las funciones de la calculadora y se agregaron mas casos de prueba.
Tambien se completo el README que estaba a la mitad, se arreglo el script de test en package.json
que nunca habia apuntado al archivo real, y se comentaron todos los archivos en español.

## Evidencia

Resultado de correr `npm test` con todas las pruebas pasando:
```
TAP version 13
ok 1 - sum: 2 + 3 debe ser igual a 5
ok 2 - sum: números negativos, -4 + -6 debe ser igual a -10
ok 3 - sum: número positivo y negativo, 10 + -3 debe ser igual a 7
ok 4 - sum: debe lanzar error si el primer valor no es número
ok 5 - sum: debe lanzar error si el segundo valor no es número
ok 6 - subtract: 10 - 4 debe ser igual a 6
ok 7 - subtract: 5 - 10 debe ser igual a -5
ok 8 - subtract: debe lanzar error si algún valor no es número
1..8
# tests 8
# pass 8
# fail 0
```

## Checklist

- [x] Los commits siguen la convención: feat, fix, docs, etc.
- [x] El código no rompe nada existente
- [x] Las pruebas pasan con `npm test`
- [x] El README está actualizado si aplica

## Referencias

No cierra ningún issue por ahora.