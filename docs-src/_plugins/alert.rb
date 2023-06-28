# {% alert info %}
# **Heads up!** This is a cool alert box!
# {% endalert %}
module Jekyll
  module Tags
    class AlertTag < Liquid::Block

      def initialize(tag_name, type, tokens)
        super
        type.strip!
        if %w(success info warning danger).include?(type)
          @type = type
        else
          puts "#{type} alert not supported. Defaulting to info"
          @type = "info"
        end
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))
        "<div class=\"alert alert-#{@type}\" role=\"alert\">#{output}</div>"
      end
    end
  end
end

Liquid::Template.register_tag('alert', Jekyll::Tags::AlertTag)
