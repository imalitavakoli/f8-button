# {% prettify dark, linenums:40, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
# function helloWorld(world) {
#   // do sth
# }
# {% endprettify %}
module Jekyll
  module Tags
    class PrettifyTag < Liquid::Block

      def initialize(tag_name, args, tokens)
        super

        @type = "dark"
        @args = ""
        $removeType = false

        if (args != "")
          args.strip!
          args = args.gsub(/[[:space:]]/, '')
          args = args.split(",")

          if (!args[0].nil?)
            if %w(dark moon light github).include?(args[0])
              @type = args[0]
              $removeType = true
            end
          end

          if ($removeType)
            @args = args.drop(1).join(" ")
          else
            @args = args.join(" ")
          end
        end

      end

      def render(context)
        output = super.to_s.strip
        output = output.gsub(/</, "&lt;")
        output = output.gsub(/>/, "&gt;")
        "<pre class=\"prettyprint f8-code-prettify--theme-#{@type} #{@args}\"><code>#{output}</code></pre>"
      end
    end
  end
end

Liquid::Template.register_tag('prettify', Jekyll::Tags::PrettifyTag)
