# {% example curved %}
# <a href="#">Link</a>
# {% endexample %}
module Jekyll
  module Tags
    class ExampleTag < Liquid::Block

      def initialize(tag_name, args, tokens)
        super

        @args = ""

        if (args != "")
          args.strip!
          args = args.gsub(/[[:space:]]/, '')
          @args = args.split(",").join(" ")
        end

      end

      def render(context)
        code = super.to_s.strip
        "<div class=\"doc-example #{@args}\">\n#{code}\n</div>"
      end

    end
  end
end

Liquid::Template.register_tag('example', Jekyll::Tags::ExampleTag)
