require 'rails_helper'

describe MessagesController, type: :controller do

  let(:user){ create(:user) }
  let(:users){ create_list(:user, 3) }
  let(:group){ create(:group) }
  let!(:message){ create(:message, group_id: group.id, user_id: user.id) }
  let(:messages) { create_list(:message, 3, group_id: group.id, user_id: user.id) }
  let(:message_params){ { body: message.body, group_id: message.group_id, user_id: message.user_id } }

  before do
    login_user user
  end

  describe 'GET/POST #set_group' do

    it "assigns the requested contact to @group" do
      get :index, params: { group_id: group }
      expect(assigns(:group)).to eq group
    end
  end

  describe 'GET #index' do

    it "assigns the requested contact to @messages" do
      get :index, params: { group_id: group }
      messages = group.messages
      expect(assigns(:messages)).to eq messages
    end

    it "assigns the requested contact to @users" do
      get :index, params: { group_id: group }
      users = group.users
      expect(assigns(:users)).to eq users
    end

    it "renders the :index template" do
      get :index, params: { group_id: group }
      expect(response).to render_template :index
    end

  end

  describe 'POST #create' do

    context 'set @message approriate value' do
      it "save @message" do
        expect{ post :create, params: { group_id: group, message: message_params } }.to change(Message, :count).by(1)
      end

      it "renders the :create template" do
        post :create, params: { group_id: group, message: message_params }
        expect(response).to redirect_to(group_messages_path)
      end
    end

    context 'set @message blank' do
      it "cannot save @message" do
        expect{ post :create, params: { group_id: group, message: attributes_for(:message, body: "") } }.to change(Message, :count).by(0)
      end

      it "renders the :create template" do
        post :create, params: { group_id: group, message: attributes_for(:message, body: "") }
        expect(response).to redirect_to(group_messages_path)
      end

      it "show alert flash" do
        post :create, params: { group_id: group, message: attributes_for(:message, body: "") }
        expect(flash[:alert]).to include("本文がないため、送信できませんでした。")
      end
    end
  end
end
