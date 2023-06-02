# nodejslearning

**references**- https://raddy.dev/blog/nodejs-setup-with-html-css-js-ejs/

**youtube references** - https://www.youtube.com/watch?v=A01KtJTv1oc

#https://www.youtube.com/watch?v=pKd0Rpw7O48

<h2>Create a project folder</h2>



<p>Name your project folder. This is where your project is going to live and all packages will be installed. Talking about packages, let&#8217;s go to step to and create our server setup.</p>



<h2>Setup Server &#8211; Package.json file</h2>



<p>This file is usually in the project root and it&#8217;s called package.json. It holds various metadata relevant to the project and it&#8217;s used to give information to npm that allows identifying the project as well as handle dependencies.</p>



<p>Go to the root of the folder, open PowerShell or the Terminal if you are using a mac and type the following command.</p>





<pre class="wp-block-code"><code>npm init or npm init -y</code></pre>



<p>As long as you have nodejs installed, this should guide you through the setup of your project. Once you finish with the installation, open your package.json file and just double check to see if everything is looking good.</p>



<p>Now let&#8217;s install some dependencies. </p>



<h2>Install Dependencies</h2>



<p>The dependencies we need to install to get started are Express and EJS.</p>



<p>Express is a web application framework for Node.js that is designed for building web applications and API&#8217;s. </p>



<p>EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. PUG is another good alternative that you can use.</p>



<p>So let&#8217;s install express and ejs together by running the following command:</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm install express ejs</pre></div>



<h2>Install Nodemon</h2>



<p>Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.</p>



<p>To install nodemon simply do:</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm install nodemon --save-dev</pre></div>


<h2>Install other dependencies</h2>

<p>Express is top framework of nodejs. Install using below command :</p>

<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm install express ejs --save</pre></div>
<p>Body Parser is Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.</p>

<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm install body-parser --save</pre></div>
<p>MySQL is open source database use to interacting with database and manipulating the records.</p>

<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm install mysql2 --save</pre></div>
<p>Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Use -dev flag to save in devDependencies and --save will save the dependencies in package.json file.</p>

<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm install --save-dev nodemon</pre></div>

<h2>Project Structure</h2>



<p>Now let&#8217;s create the following folders and files, leaving node_modules, readme.md, package-lock and package-json as that should have been automatically generated by now.</p>



<pre class="wp-block-preformatted">📂 node_modules
📂 public
 📂 css
  📜 main.css
 📂 img
  🖼 cat.jpg
 📂 js 
  📜 script.js
📂 views
 🌍 about.ejs
 🌍 index.ejs
📜 README.md
🌍 app.js
📜 package-lock.json
📜 package-json
</pre>



<h2>Run it</h2>



<p>Before we run the project to see if everything is working as intended, we need to add some more metadata in our package.json file.</p>



<p>Open your package.json file and add the following under scripts</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;application/json&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;fileName&quot;:&quot;packages.json&quot;,&quot;language&quot;:&quot;JSON&quot;,&quot;modeName&quot;:&quot;json&quot;}">&quot;start&quot;: &quot;nodemon app.js&quot;</pre></div>



<p>Your full json file should look something like this:</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;application/json&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;fileName&quot;:&quot;packages.json&quot;,&quot;language&quot;:&quot;JSON&quot;,&quot;modeName&quot;:&quot;json&quot;}">{
  &quot;name&quot;: &quot;Learning NodeJS&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;NodeJS Tutorial&quot;,
  &quot;main&quot;: &quot;index.js&quot;,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;,
    &quot;start&quot;: &quot;nodemon app.js&quot;
  },
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;,
  &quot;dependencies&quot;: {
    &quot;ejs&quot;: &quot;^3.1.3&quot;,
    &quot;express&quot;: &quot;^4.17.1&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;nodemon&quot;: &quot;^2.0.4&quot;
  }
}</pre></div>



<p>Save the file and now you should be able to run your project by simply doing:</p>



<pre class="wp-block-code"><code>npm start</code></pre>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm start</pre></div>



<p>We are getting close, but there are a few more things that we need to do before we are able to see our project. First, we need to add &#8216;express&#8217; and select port number that NodeJs can listen on. Let&#8217;s do that.</p>



<p>In your app.js folder add the following code below and then run the project with &#8220;<strong>npm start&#8221;</strong>:</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;text/javascript&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;JavaScript&quot;,&quot;modeName&quot;:&quot;js&quot;}">// Imports
const express = require('express')
const app = express()
const port = 5000

// Listen on Port 5000
app.listen(port, () =&gt; console.info(`App listening on port ${port}`))</pre></div>



<p>Run your app, and see what happens. In <strong>PowerShell </strong>or <strong>Terminal </strong>(for Mac) you should see a message:</p>



<p><strong>App&nbsp;listening&nbsp;on&nbsp;port 5000</strong> &#8211; <em>unless the port is already taken, then you can change it to 3000 or something like that.</em></p>



<h2>Static Files</h2>



<p>This will allow us to easily access our statics files such as css, js and images from our root folder of the project. Let&#8217;s have a look at how we can do that:</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;text/javascript&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;fileName&quot;:&quot;app.js&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;modeName&quot;:&quot;js&quot;}">// Static Files
app.use(express.static('public'));

// Example for other olders
// app.use('/css', express.static(__dirname + 'public/css'))</pre></div>



<h2>Setting up our View&#8217;s &amp; EJS</h2>



<p>This does two things. It will help us set up our views folder, where our html files will live and also we need to set the view engine which in our case is the EJS. </p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;text/javascript&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;JavaScript&quot;,&quot;modeName&quot;:&quot;js&quot;}">// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');</pre></div>



<h2>Rendering Pages</h2>



<p>In this example, I will give you two options. One rendering the index.ejs file and one that simply grabs the about.html file. </p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;text/javascript&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;fileName&quot;:&quot;app.js&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;modeName&quot;:&quot;js&quot;}">// Navigation
app.get('', (req, res) =&gt; {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) =&gt; {
   res.sendFile(__dirname + '/views/about.html')
})</pre></div>



<p>Your final code for app.js should look something like this:</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;javascript&quot;,&quot;mime&quot;:&quot;text/javascript&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;JavaScript&quot;,&quot;modeName&quot;:&quot;js&quot;}">// Imports
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) =&gt; {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) =&gt; {
   res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () =&gt; console.info(`App listening on port ${port}`))</pre></div>



<h2>Example of EJS page</h2>



<p>For our index.html let&#8217;s see how we can add our stylesheet and also some EJS code.</p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;htmlmixed&quot;,&quot;mime&quot;:&quot;text/html&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;HTML&quot;,&quot;modeName&quot;:&quot;html&quot;}">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/main.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    
    Index baby
    &lt;img src=&quot;img/cat.jpg&quot; alt=&quot;cat&quot;&gt;
    &lt;h1&gt;&lt;%= text %&gt;&lt;/h1&gt;

&lt;/body&gt;
&lt;/html&gt;</pre></div>



<h2>Final</h2>



<p>Run the project by doing <strong>npm start</strong> and then open <a href="5000" target="_blank" rel="noreferrer noopener">localhost:5000</a>  in your browser. If you want to visit the about page you should add a slash after the URL just like this <a href="5000/about" target="_blank" rel="noreferrer noopener">localhost:5000/about</a></p>



<div class="wp-block-codemirror-blocks-code-block code-block"><pre class="CodeMirror" data-setting="{&quot;mode&quot;:&quot;powershell&quot;,&quot;mime&quot;:&quot;application/x-powershell&quot;,&quot;theme&quot;:&quot;default&quot;,&quot;lineNumbers&quot;:true,&quot;styleActiveLine&quot;:true,&quot;lineWrapping&quot;:true,&quot;readOnly&quot;:true,&quot;language&quot;:&quot;PowerShell&quot;,&quot;modeName&quot;:&quot;powershell&quot;}">npm start</pre></div>



<p>And that&#8217;s everything. </p>
