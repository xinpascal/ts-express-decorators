
<header class="symbol-info-header"><h1 id="bodyparams">BodyParams</h1><label class="symbol-info-type-label decorator">Decorator</label></header>
<!-- summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { BodyParams }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.20.3/src//common/filters/decorators/bodyParams.ts#L0-L0">/common/filters/decorators/bodyParams.ts</a></td></tr></tbody></table></section>
<!-- overview -->


### Overview


<pre><code class="typescript-lang ">function <span class="token function">BodyParams</span><span class="token punctuation">(</span>expression?<span class="token punctuation">:</span> <span class="token keyword">string</span> | <span class="token keyword">any</span><span class="token punctuation">,</span> useType?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Function<span class="token punctuation">;</span></code></pre>


<!-- Parameters -->


Param | Type | Description
---|---|---
 expression|<code>string &#124; any</code>|Optional. The path of the property to get.
 useType|<code>any</code>|Optional. The type of the class that to be used to deserialize the data.




<!-- Description -->


### Description

BodyParams return the value from [request.body](http://expressjs.com/en/4x/api.html#req.body) object.

#### Example

```typescript
@Controller('/')
class MyCtrl {
   @Post('/')
   create(@BodyParams() body: any) {
      console.log('Entire body', body);
   }

   @Post('/')
   create(@BodyParams('id') id: string) {
      console.log('ID', id);
   }

   @Post('/')
   create(@BodyParams('user') user: User) { // with deserialization
      console.log('user', user);
   }

   @Post('/')
   create(@BodyParams('users', User) users: User[]) { // with deserialization
      console.log('users', users);
   }
}
```
> For more information on deserialization see [converters](docs/converters.md) page.

<!-- Members -->

