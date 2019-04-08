# @teamhive/ngx-table

DEMO: [https://teamhive.github.io/ngx-table](https://teamhive.github.io/ngx-table)

<!-- header-chop -->
## Installation

```bash
npm i @teamhive/ngx-table --save
```

## Usage

This is the most basic implementation of ngx-table.

my.module.ts

```typescript
import { NgxTableModule } from '@teamhive/ngx-table';

@NgModule({
  imports: [
    ...,
    NgxTableModule
  ]
})
```

sample-data.interface.ts

```typescript
export interface TableData {
  name: string;
  bio: string;
  age: number;
  active: boolean;
  location: string;
}
```

basic-table.component.ts

```typescript
import { Component } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';

@Component({
  selector: 'app-basic-table',
  templateUrl: 'basic-table.component.html',
  styleUrls: ['basic-table.component.scss']
})
export class BasicTableComponent {

  readonly tableConfig: TableConfiguration<TableData> = {
    tableId: 'basicTable',
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      bio: {
        columnSize: 3
      }
    }
  };

  readonly data: TableData[] = [{
    active: true,
    age: 30,
    bio: 'Lorem ipsum dolor sit amet...',
    name: 'Scott',
    location: 'USA'
  }, {
    active: false,
    age: 25,
    bio: 'Duis aute irure dolor in reprehenderit...',
    name: 'Bart',
    location: 'JPN'
  };
}
```

basic-table.component.html

```html
<ngx-table [configuration]="tableConfig" [items]="data">
    <ng-container *ngFor="let columnId of tableConfig.columns">
        <ng-template let-item [ngxHeader]="columnId">
            <h3>{{ columnId }}</h3>
        </ng-template>

        <ng-template let-item [ngxColumn]="columnId">
          <span>{{ item.data[columnId] }}</span>
      </ng-template>
    </ng-container>
</ngx-table>
```

## Inputs and Configuration

### Directives and Inputs

| Inputs  |  Description |
|---|---|
| `items` | the data to display in the table |
| `configuration` | The configuration ([TableConfiguration](https://github.com/TeamHive/ngx-table/blob/master/libs/ngx-table/src/lib/models/table-configuration.interface.ts)) used to define the table. The `tableId` and `columns` properties are required. <br> - `tableId` allows for multiple tables in the same view. <br> - `columns` defines the properties of the data - passed to `items` input - to show <br> This object can be extended to provide any implementation specific data to the header and row cells. |
| `ngxHeader` | A directive indicating a header template for a column. The value must match a column within the columns array of the table configuration. <br> `let-item` provides the variable `item: `[HeaderCellContext](https://github.com/TeamHive/ngx-table/blob/master/libs/ngx-table/src/lib/models/header-cell-context.interface.ts) to the ng-template |
| `ngxColumn `| A directive indicating a data cell template for a row. The template will be applied in every row of the data. The value must match a column within the columns array of the table configuration. <br> `let-item` provides the variable `item: `[RowCellContext](https://github.com/TeamHive/ngx-table/blob/master/libs/ngx-table/src/lib/models/row-cell-context.interface.ts) to the ng-template |


### CSS Variables

<!-- css-vars:start -->
| Variable | Description | Default | 
|---|---|---|
| `--ngx-table-border-width` | The width of all borders in the table | `1px` |
| `--ngx-table-border-color` | The color of all borders in the table | `#cccccc` |
| `--ngx-table-border-style` | The style of all borders in the table | `solid` |
| `--ngx-table-border-radius` | The border radius of the outermost edges of the table | `0` |
| `--ngx-table-background-color` | The default color for all backgrounds | `white` |
| `--ngx-table-header-background-color` | The background color of the table header | `var(--ngx-table-background-color)` |
| `--ngx-table-odd-row-background-color` | The background color of the odd rows | `var(--ngx-table-background-color)` |
| `--ngx-table-even-row-background-color` | The background color of the even rows | `var(--ngx-table-background-color)` |
| `--ngx-table-color` | The text color of the table | `currentColor` |
| `--ngx-table-header-color` | The text color of the headers | `var(--ngx-table-color)` |
| `--ngx-table-body-color` | The text color of the body | `var(--ngx-table-color)` |
| `--ngx-table-odd-row-color` | The text color of the even rows | `var(--ngx-table-body-color)` |
| `--ngx-table-even-row-color` | The text color of the odd rows | `var(--ngx-table-body-color)` |
| `--ngx-table-row-height` | The height of the rows of the table | `auto` |
| `--ngx-table-cell-align-items` | The flex `align-items` value for a cell | `center` |
| `--ngx-table-cell-justify-content` | The flex `justify-content` value for a cell | `center` |
| `--ngx-table-cell-padding` | The padding value for the cell | `0` |
| `--ngx-table-header-pointer-events` | The pointer events for the header. Set to `none` if you want to prevent interaction | `initial` |
| `--ngx-table-content-pointer-events` | The pointer events for the table body. Set to `none` if you want to prevent interaction | `initial` |
<!-- css-vars:end -->

### More Examples

See the [Demo](https://teamhive.github.io/ngx-table/basic) for more configuration, and styling options.
