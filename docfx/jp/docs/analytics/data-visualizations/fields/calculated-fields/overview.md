---
title: 計算フィールドを使用する方法
_description: 計算フィールドとそのすべてのタイプを使用して、より正確なデータ可視化を作成する方法を説明します。
_language: ja
---

# 計算フィールド

[分析] では、計算フィールドというフィールドをデータセットに定義することができます。フィールドは、式 (数式) を使用して作成されます。式は、既存のフィールド、定数値、および以下の組み合わせにすることができます。

  - [定義済み関数](#事前計算フィールド)および/または

  - [単純な数学関数および定義されていない他の関数](#定義済み関数を使用せず計算フィールドを作成)。

以下の 2 種類の計算フィールドがあります。

  - [事前計算](#事前計算フィールド) (計算済み)

  - [事後計算](#事後計算フィールド)。

<a name='precalculated-fields'></a>
## 事前計算フィールド

事前計算フィールドは、データ エディターの集計を実行する前に評価されます。つまり、特定の数式を適用するために、分析はフィールドのデータセット内のすべてのレコードを 1 回または複数回調べます。そのため、大規模なデータセットを使用する場合、事前計算のパフォーマンスが低下する可能性があります。

新しい計算フィールドを追加するには、[フィールド] パネルの **[+] ボタン**をクリック / タップし、**[集計フィールド]** を選択します。

<img src="images/calculated-field-option.png" alt="Pre-calculated field option" class="responsive-img" width="85%"/>

[計算フィールドの作成] 画面が開きます。

<img src="images/new-calculated-field-dialog.png" alt="New calculated field dialog" class="responsive-img" width="85%"/>

以下の手順を実行します。

1.  新しい計算フィールドに名前を割り当てます。

2.  数式 (式) を入力します。[フィールド] セクションで、すべての既存のフィールドのリストがら選択できます。1 つ以上のフィールドを使用して (選択したフィールドをクリックまたは角括弧で名前を入力) 数式を作成できます。[関数] セクションにリストされている定義済み関数のいずれかを選択して、または単純な数学計算を使用します (上記に表示)。

新しい計算フィールドは、[フィールド] リストの下部に表示されます。

<img src="images/new-calculated-field-visualization-example.png" alt="New calculated field shown in the column placeholder and in the visualization" class="responsive-img" width="85%"/>

上記の例では、集計がデータ フィールドに適用されていないグリッドの表示形式で新しい計算フィールドが使用されます。事前計算フィールドは、ピボット グリッドでも使用できます。この場合、計算は事前計算フィールドで集計されたレコードに適用されます。

<a name='postcalculated-fields'></a>
## 事後計算フィールド

データ エディターでデータ フィールドの集計を実行するピボット テーブルやその他の表示形式を使用する場合、事後計算フィールドを作成できます。事後計算フィールドは、すでに集計された値に数式を適用することによって常に作成されます。

事後計算フィールドを作成する手順:

1.  データ エディターでデータ ソースからフィールドを追加して、表示形式 (またはピボット テーブル) を作成します。

    <img src="images/post-calculated-field-example.png" alt="Post calculated fields in the Data editor" class="responsive-img" width="85%"/>

2.  [値] の横にある [F(x)] ボタンをクリック/タップして、[計算フィールドの作成] 画面を開きます。

    <img src="images/post-calculated-field-new-calculated-field-dialog.png" alt="Post calculated field new calculated field screen" class="responsive-img" width="85%"/>

3.  事後計算のフィールドの [計算フィールドの作成] 画面
計算フィールドに名前を付け、集計値に数式を適用します。
注: 値のリストには、集計後に表示形式で使用したデータ フィールドが含まれています (Spend、Budget ではなく、Sum of Spend、Sum of Budget)。

データ エディターに含まれていないデータ ソースの他のフィールドを使用する場合は、[値] の横の [+] ボタンをクリック/タップして追加できます。事後計算フィールドは集計値のみで作成されるため、最初にデータ フィールドで実行する集計をドロップダウン リストから選択する必要があります。

<img src="images/post-calculated-field-new-calculated-field-dialog-adding-fields.png" alt="Adding fields in the calculated field screen" class="responsive-img" width="85%"/>

手順 1 をスキップして、最初に事後計算フィールドを作成するか、表示形式で事後計算フィールドのみを使用することもできます。

大規模なデータセットを使用する場合、事後計算は事前計算よりパフォーマンスが向上します。

<a name='predefined-functions'></a>
## [分析] の定義済み関数の使用

事前計算フィールドと事後計算フィールドの両方で、Reveal で使用可能な機能のいずれかを使用できます。

  - [**集計**](aggregation.html):
    [average](aggregation.html#average)、
    [averageif](aggregation.html#averageif)、
    [count](aggregation.html#count)、
    [countif](aggregation.html#countif)、
    [max](aggregation.html#max)、
    [maxif](aggregation.html#maxif)、
    [min](aggregation.html#min)、
    [minif](aggregation.html#minif)

  - [**日付**](date.html):
    [date](date.html#date-date)、
    [datevalue](date.html#datevalue)、
    [day](date.html#day)、
    [formatdate](date.html#formatdate)、
    [fquarter](date.html#fquarter)、
    [semester](date.html#semester)、
    [fsemester](date.html#fsemester)、
    [fyear](date.html#fyear)、
    [hour](date.html#hour)、
    [millisecond](date.html#millisecond)、
    [minute](date.html#minute)、
    [month](date.html#month)、
    [monthname](date.html#monthname)、
    [monthshortname](date.html#monthshortname)、
    [applytimezone](date.html#applytimezone)、
    [currenttimezone](date.html#currenttimezone)、
    [datetimefromunixts](date.html#datetimefromunixts)、
    [now](date.html#now)、
    [quarter](date.html#quarter)、
    [second](date.html#second)、
    [time](date.html#date-time)、
    [today](date.html#today)、
    [weekday](date.html#weekday)、
    [weeknum](date.html#weeknum)、
    [year](date.html#year)

  - [**情報**](information.html):
    [empty](information.html#empty)、
    [isempty](information.html#isempty)

  - [**ロジック**](logic.html):
    [and](logic.html#and)、
    [false](logic.html#false)、
    [if](logic.html#if)、
    [not](logic.html#not)、
    [or](logic.html#or)、
    [true](logic.html#true)

  - [**検索/行列**](lookup-reference.html):
    [previous](lookup-reference.html#previous)、
    [row](lookup-reference.html#row)

  - [**数学**](math.html):
    [abs](math.html#abs)、
    [exp](math.html#exp)、
    [log](math.html#log)、
    [log10](math.html#log10)、
    [mod](math.html#mod)、
    [rand](math.html#rand)、
    [randbetween](math.html#randbetween)、
    [sign](math.html#sign)、
    [sqrt](math.html#sqrt)、
    [trunc](math.html#trunc)

  - [**文字列**](string.html):
    [concatenate](string.html#concatenate)、
    [find](string.html#find)、
    [len](string.html#len)、
    [lower](string.html#lower)、
    [mid](string.html#mid)、
    [replace](string.html#replace)、
    [sortinterval](string.html#sortinterval)、
    [trim](string.html#trim)、
    [upper](string.html#upper)

>[!NOTE]
>IF 条件の制限: 事前計算のフィールドの集計関数に含まれる場合、IF 条件には既知の制限があります。計算式内の IF 条件を確認するためにすべてのレコードを複数回調べる必要があり、パフォーマンスが低下する問題が発生するため、サポートされていません。

<a name='without-predefined-functions'></a>
## 定義済み関数を使用せず計算フィールドを作成

定義済み関数を使用せずに計算フィールドを作成することもできます。たとえば、減算、除算、加算、乗算などの単純な数学計算用。[こちらの表](samples.html)には、定義済み関数を使用しない例があります。

## [分析] の関数を使用する際に注意すること
  - **テキスト文字列は引用符で囲む必要があります**。
    例えば、ロケール ("en") および日付書式 ("dd/mm/yyyy") 。

  - **数式に含まれるフィールドは角括弧で囲む必要があります**。たとえば、HR データセットの [Wage]、[BirthDate]、[EmployeeID] などです。
