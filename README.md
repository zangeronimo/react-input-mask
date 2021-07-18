# React Input Mask

Simple code for input masks like phone, zipcode, cpf, cnpj, date...

## Without Mask
Don't use mask and number tags...
For example:

<pre><Input label="Simple Input" name="simpleInput" /></pre>


## All strings

Use # to construct a alphanumeric mask.
For example: 

<pre><Input label="Alpha Input" mask='###/###(##)' name="alphaInputName" /></pre>

## Only Number Mask

Use 9 to construct a onlynumber + number tag.
For example:

<pre><Input label="Mobile Input" mask='(99) 99999-9999' name="mobileInput" number /></pre>

### Author
  - [Luciano Zangeronimo](https://github.com/zangeronimo)

### Licence
  MIT