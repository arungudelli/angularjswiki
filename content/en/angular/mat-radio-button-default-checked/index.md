+++
title = "mat-radio-button default checked in Angular mat-radio-group"
subtitle = "Check mat-radio-button by default"
summary ="To check mat-radio-button by default in Angular mat-radio-group, we need to use checked property"
keywords=["mat-checkbox color, Angular material"]
date="2022-10-10T00:00:05+0000"
lastmod="2022-10-10T00:00:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "mat-radio-button default checked"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

To check `mat-radio-button` by default in Angular `mat-radio-group`, we need to use `checked` property.

In real world Angular applications, `mat-radio-button` options will come from the server and some times we need to check one option by default. 

The default `mat-radio-button` option might be the first option, or some logic based on our business needs.

First we will create an interface which represents `mat-radio-button` options.

```typescript

export interface Option {
  name: string;
  value: number;
  checked: boolean;
}

```

Now lets add some random radio button options.

```typescript

radioButtonOptions: Option[] = [];

constructor() {
    for (var i = 1; i < 5; i++) {
      var defaultChecked = i == 1;
      this.radioButtonOptions.push({
        name: 'Option ' + i,
        value: i,
        checked: defaultChecked,
      });
    }
  }

```

In the above `ma-radio-button` options, I am setting the first option `checked` property to `true`.

That means, the first option will be selected by default.

In the component html file, using `*ngFor` I am displaying `mat-radio-button` options. 

And using `[checked]` property, I am assigning the default value. 

```html

<mat-radio-group
    aria-labelledby="example-radio-group-label"
    class="example-radio-group"
  >
    <mat-radio-button
      class="example-radio-button"
      *ngFor="let option of radioButtonOptions"
      [value]="option.value"
      [checked]="option.checked"
    >
      {{ option.name }}
    </mat-radio-button>
</mat-radio-group>

```

And now we will add `[ngModel]` to the `mat-radio-group`.

```html

<mat-radio-group
    aria-labelledby="example-radio-group-label"
    class="example-radio-group"
    [(ngModel)]="selectedOption"
  >
    <mat-radio-button
      class="example-radio-button"
      *ngFor="let option of radioButtonOptions"
      [value]="option.value"
      [checked]="option.checked"
    >
      {{ option.name }}
    </mat-radio-button>
  </mat-radio-group>
<div>The selected option is {{ selectedOption }}</div>

```

And in the component `.ts` file, assigning selected option to the first option value.

```typescript
  
  constructor() {
    this.selectedOption = this.radioButtonOptions[0].value;
  }
  
  selectedOption: number;

```

Now the checked value is displayed on the bottom of the radio buttons. 

Go through the demo to understand further.

## `mat-radio-button` default checked StackBlitz demo

Here is the link to StackBlitz demo for `mat-radio-button` default checked.

[mat-radio-button default checked](https://stackblitz.com/edit/mat-radio-button-default-checked)


