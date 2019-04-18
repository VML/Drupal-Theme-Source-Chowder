# SCSS File Comments

## File introduction

### This goes at the top of the file for search ability and overall description.

Double dash on all lines and with top and bottom hyphen borders

// Type: Name

// TL;DR of what this file does

Example:

```
// -----------------------------------------------------------------------------
// Component: Hero
// A large image section with title and description text
// -----------------------------------------------------------------------------
```

## Section headings

### Comments to detail major sections of code *within* a file

* `*` on all lines with a dash and 2 stars on the top and one star and a dash on the bottom. Sits right above the code it describes

```
/**
 * Hero background image
 * Options for:
 *  - left and right aligned image
 *  - gradient overlay
 */
 .hero__background-img {

```

## Inline notes

### One liner notes 

Double dash right above the code it describes

```
// This is here to do something that works
.hero__background-img--left {

or

.hero__background-img--left {
	// This is here to do something that works
	background-position: left;
```

## Divider

Split content as needed

```
// ------------------------------------------------------------------------------------------------------------------ //
```
